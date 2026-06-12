"use client";

import { useActionState, useState, useTransition } from "react";
import { submitContact, type ContactState } from "@/lib/actions/contact";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const fieldClass =
  "w-full rounded-xl border border-[#C8C8C8] bg-white px-4 py-3 font-body text-sm text-[#2D2D2D] placeholder-[#8C8C8C] focus:outline-none focus:border-[#E94560] focus:ring-2 focus:ring-[rgba(233,69,96,0.15)] transition-colors duration-150";
const labelClass = "block font-display font-semibold text-sm text-[#1A1A2E] mb-1.5";
const errorClass = "mt-1 text-xs text-red-600 font-body";

const initialFields = { nom: "", email: "", message: "", rgpd: false };

export function ContactForm() {
  const [state, formAction] = useActionState<ContactState, FormData>(
    submitContact,
    { success: false }
  );
  const [fields, setFields] = useState(initialFields);
  const [isPending, startTransition] = useTransition();

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const target = e.target as HTMLInputElement;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setFields((prev) => ({ ...prev, [target.name]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(() => {
      formAction(formData);
    });
  }

  if (state.success) {
    return (
      <div className="bg-white rounded-2xl border border-[#E8E8E8] p-10 text-center">
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-100 mx-auto mb-4">
          <CheckCircle2 size={28} className="text-green-600" />
        </div>
        <h3 className="font-display font-bold text-xl text-[#1A1A2E] mb-2">
          Message envoyé !
        </h3>
        <p className="font-body text-sm text-[#484848]">
          Nous vous répondrons dans les plus brefs délais. Pour une urgence,
          appelez le{" "}
          <a href="tel:0988095365" className="text-[#E94560] font-semibold">
            09 88 09 53 65
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl border border-[#E8E8E8] p-7 flex flex-col gap-5"
    >
      {state.error && (
        <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700">
          <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
          <p className="font-body text-sm">{state.error}</p>
        </div>
      )}

      <div>
        <label htmlFor="nom" className={labelClass}>Nom complet *</label>
        <input
          id="nom" name="nom" type="text" required autoComplete="name"
          value={fields.nom} onChange={handleChange}
          className={fieldClass} placeholder="Jean Dupont"
        />
        {state.fieldErrors?.nom && (
          <p className={errorClass}>{state.fieldErrors.nom[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>Email *</label>
        <input
          id="email" name="email" type="email" required autoComplete="email"
          value={fields.email} onChange={handleChange}
          className={fieldClass} placeholder="jean@email.fr"
        />
        {state.fieldErrors?.email && (
          <p className={errorClass}>{state.fieldErrors.email[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>Message *</label>
        <textarea
          id="message" name="message" rows={5} required
          value={fields.message} onChange={handleChange}
          className={cn(fieldClass, "resize-none")}
          placeholder="Votre question, demande de devis ou toute autre information…"
        />
        {state.fieldErrors?.message && (
          <p className={errorClass}>{state.fieldErrors.message[0]}</p>
        )}
      </div>

      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox" name="rgpd" required
          checked={fields.rgpd}
          onChange={handleChange}
          className="mt-0.5 w-4 h-4 accent-[#E94560]"
        />
        <span className="font-body text-xs text-[#6B6B6B] leading-relaxed">
          J&apos;accepte que mes données soient utilisées pour traiter ma demande,
          conformément à la{" "}
          <a
            href="/mentions-legales"
            className="text-[#E94560] underline underline-offset-2"
          >
            politique de confidentialité
          </a>
          . *
        </span>
      </label>

      <button
        type="submit"
        disabled={isPending}
        className="h-12 rounded-xl bg-[#E94560] text-white font-display font-bold text-sm uppercase tracking-[0.08em] hover:bg-[#D03350] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-150 flex items-center justify-center gap-2"
      >
        {isPending ? (
          <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
        ) : (
          "Envoyer le message"
        )}
      </button>
    </form>
  );
}
