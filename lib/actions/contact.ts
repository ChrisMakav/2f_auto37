"use server";

import { z } from "zod";
import { Resend } from "resend";

const contactSchema = z.object({
  nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Adresse email invalide"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
  rgpd: z.literal("on", { error: "Vous devez accepter la politique de confidentialité" }),
});

export type ContactState = {
  success: boolean;
  error?: string;
  fieldErrors?: Partial<Record<keyof z.infer<typeof contactSchema>, string[]>>;
};

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const raw = {
    nom: formData.get("nom"),
    email: formData.get("email"),
    message: formData.get("message"),
    rgpd: formData.get("rgpd"),
  };

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      success: false,
      fieldErrors: parsed.error.flatten().fieldErrors as ContactState["fieldErrors"],
    };
  }

  const { nom, email, message } = parsed.data;

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: "2F AUTO37 <onboarding@resend.dev>",
    to: process.env.CONTACT_EMAIL ?? "mabilachrisna@gmail.com",
    replyTo: email,
    subject: `Nouveau message de ${nom} — 2F AUTO37`,
    html: `
      <h2>Nouveau message via le formulaire de contact</h2>
      <p><strong>Nom :</strong> ${nom}</p>
      <p><strong>Email :</strong> ${email}</p>
      <hr />
      <p><strong>Message :</strong></p>
      <p>${message.replace(/\n/g, "<br/>")}</p>
    `,
  });

  if (error) {
    return { success: false, error: "Une erreur est survenue lors de l'envoi. Veuillez réessayer ou appeler le 09 88 09 53 65." };
  }

  return { success: true };
}
