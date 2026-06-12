"use server";

import { z } from "zod";
import { Resend } from "resend";

const appointmentSchema = z.object({
  nom: z.string().min(2, "Le nom est requis"),
  prenom: z.string().min(2, "Le prénom est requis"),
  telephone: z.string().min(10, "Numéro de téléphone invalide"),
  email: z.string().email("Adresse email invalide"),
  marque: z.string().min(1, "La marque du véhicule est requise"),
  modele: z.string().min(1, "Le modèle est requis"),
  annee: z.string().regex(/^\d{4}$/, "Année invalide"),
  immatriculation: z.string().min(4, "Immatriculation invalide"),
  service: z.string().min(1, "Veuillez sélectionner un type d'intervention"),
  date: z.string().min(1, "Veuillez choisir une date"),
  creneau: z.enum(["matin", "apresmidi"] as const, {
    error: "Veuillez choisir un créneau",
  }),
  message: z.string().optional(),
  rgpd: z.literal("on", {
    error: "Vous devez accepter la politique de confidentialité",
  }),
});

export type AppointmentState = {
  success: boolean;
  error?: string;
  fieldErrors?: Partial<Record<string, string[]>>;
};

export async function submitAppointment(
  _prev: AppointmentState,
  formData: FormData
): Promise<AppointmentState> {
  const raw = {
    nom: formData.get("nom"),
    prenom: formData.get("prenom"),
    telephone: formData.get("telephone"),
    email: formData.get("email"),
    marque: formData.get("marque"),
    modele: formData.get("modele"),
    annee: formData.get("annee"),
    immatriculation: formData.get("immatriculation"),
    service: formData.get("service"),
    date: formData.get("date"),
    creneau: formData.get("creneau"),
    message: formData.get("message"),
    rgpd: formData.get("rgpd"),
  };

  const parsed = appointmentSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      success: false,
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  const d = parsed.data;
  const creneauLabel = d.creneau === "matin" ? "Matin" : "Après-midi";
  const dateFormatted = new Date(d.date).toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: "2F AUTO37 <onboarding@resend.dev>",
    to: process.env.CONTACT_EMAIL ?? "mabilachrisna@gmail.com",
    replyTo: d.email,
    subject: `Demande de RDV — ${d.prenom} ${d.nom} — ${dateFormatted}`,
    html: `
      <h2>Nouvelle demande de rendez-vous</h2>
      <h3>Client</h3>
      <p><strong>Nom :</strong> ${d.prenom} ${d.nom}</p>
      <p><strong>Téléphone :</strong> ${d.telephone}</p>
      <p><strong>Email :</strong> ${d.email}</p>
      <h3>Véhicule</h3>
      <p><strong>Marque :</strong> ${d.marque} — <strong>Modèle :</strong> ${d.modele} — <strong>Année :</strong> ${d.annee}</p>
      <p><strong>Immatriculation :</strong> ${d.immatriculation}</p>
      <h3>Intervention</h3>
      <p><strong>Type :</strong> ${d.service}</p>
      <p><strong>Date souhaitée :</strong> ${dateFormatted} — ${creneauLabel}</p>
      ${d.message ? `<p><strong>Message :</strong> ${d.message.replace(/\n/g, "<br/>")}</p>` : ""}
    `,
  });

  if (error) {
    return {
      success: false,
      error: "Une erreur est survenue lors de l'envoi. Veuillez réessayer ou appeler le 09 88 09 53 65.",
    };
  }

  return { success: true };
}
