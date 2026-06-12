"use client";

import { useActionState, useState, useEffect, useTransition } from "react";
import { submitAppointment, type AppointmentState } from "@/lib/actions/appointment";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  "Révision complète",
  "Freinage (plaquettes, disques)",
  "Distribution / Courroies",
  "Embrayage",
  "Amortisseurs / Suspension",
  "Diagnostic électronique",
  "Climatisation",
  "Géométrie / Parallélisme",
  "Pneumatiques",
  "Carrosserie légère",
  "Achat / Vente véhicule",
  "Location de véhicule",
  "Autre",
];

const fieldClass =
  "w-full rounded-xl border border-[#C8C8C8] bg-white px-4 py-3 font-body text-sm text-[#2D2D2D] placeholder-[#8C8C8C] focus:outline-none focus:border-[#E94560] focus:ring-2 focus:ring-[rgba(233,69,96,0.15)] transition-colors duration-150";
const labelClass = "block font-display font-semibold text-sm text-[#1A1A2E] mb-1.5";
const errorClass = "mt-1 text-xs text-red-600 font-body";

const initialFields = {
  nom: "",
  prenom: "",
  telephone: "",
  email: "",
  marque: "",
  modele: "",
  annee: "",
  immatriculation: "",
  service: "",
  date: "",
  creneau: "",
  message: "",
  rgpd: false,
};

export function AppointmentForm() {
  const [state, formAction] = useActionState<AppointmentState, FormData>(
    submitAppointment,
    { success: false }
  );
  const [fields, setFields] = useState(initialFields);
  const [minDate, setMinDate] = useState("");
  const [maxYear, setMaxYear] = useState(2100);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    setMinDate(new Date().toISOString().split("T")[0]);
    setMaxYear(new Date().getFullYear() + 1);
  }, []);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const target = e.target;
    const name = target.name;
    const value =
      target instanceof HTMLInputElement && target.type === "checkbox"
        ? target.checked
        : target.value;
    setFields((prev) => ({ ...prev, [name]: value }));
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
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mx-auto mb-5">
          <CheckCircle2 size={32} className="text-green-600" />
        </div>
        <h2 className="font-display font-bold text-2xl text-[#1A1A2E] mb-3">
          Demande envoyée !
        </h2>
        <p className="font-body text-[#484848] max-w-sm mx-auto mb-6">
          Nous avons bien reçu votre demande de rendez-vous. Tony vous contactera sous 24h pour confirmer votre créneau.
        </p>
        <p className="font-body text-sm text-[#8C8C8C]">
          Pour toute urgence, appelez directement le{" "}
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
      className="bg-white rounded-2xl border border-[#E8E8E8] p-8"
    >
      <h2 className="font-display font-bold text-xl text-[#1A1A2E] mb-7">
        Informations pour votre rendez-vous
      </h2>

      {state.error && (
        <div className="flex items-start gap-3 p-4 mb-6 rounded-xl bg-red-50 border border-red-200 text-red-700">
          <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
          <p className="font-body text-sm">{state.error}</p>
        </div>
      )}

      {/* Nom / Prénom */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="nom" className={labelClass}>Nom *</label>
          <input
            id="nom" name="nom" type="text" required autoComplete="family-name"
            value={fields.nom} onChange={handleChange}
            className={fieldClass} placeholder="Dupont"
          />
          {state.fieldErrors?.nom && (
            <p className={errorClass}>{state.fieldErrors.nom[0]}</p>
          )}
        </div>
        <div>
          <label htmlFor="prenom" className={labelClass}>Prénom *</label>
          <input
            id="prenom" name="prenom" type="text" required autoComplete="given-name"
            value={fields.prenom} onChange={handleChange}
            className={fieldClass} placeholder="Jean"
          />
          {state.fieldErrors?.prenom && (
            <p className={errorClass}>{state.fieldErrors.prenom[0]}</p>
          )}
        </div>
      </div>

      {/* Téléphone / Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="telephone" className={labelClass}>Téléphone *</label>
          <input
            id="telephone" name="telephone" type="tel" required autoComplete="tel"
            value={fields.telephone} onChange={handleChange}
            className={fieldClass} placeholder="06 12 34 56 78"
          />
          {state.fieldErrors?.telephone && (
            <p className={errorClass}>{state.fieldErrors.telephone[0]}</p>
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
      </div>

      {/* Véhicule */}
      <div className="border-t border-[#F0F0F0] my-6 pt-6">
        <h3 className="font-display font-bold text-base text-[#1A1A2E] mb-5">
          Votre véhicule
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <div>
            <label htmlFor="marque" className={labelClass}>Marque *</label>
            <input
              id="marque" name="marque" type="text" required
              value={fields.marque} onChange={handleChange}
              className={fieldClass} placeholder="Renault, Peugeot, VW…"
            />
            {state.fieldErrors?.marque && (
              <p className={errorClass}>{state.fieldErrors.marque[0]}</p>
            )}
          </div>
          <div>
            <label htmlFor="modele" className={labelClass}>Modèle *</label>
            <input
              id="modele" name="modele" type="text" required
              value={fields.modele} onChange={handleChange}
              className={fieldClass} placeholder="Clio, 308, Golf…"
            />
            {state.fieldErrors?.modele && (
              <p className={errorClass}>{state.fieldErrors.modele[0]}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="annee" className={labelClass}>Année *</label>
            <input
              id="annee" name="annee" type="number" required
              min="1950" max={maxYear}
              value={fields.annee} onChange={handleChange}
              className={fieldClass} placeholder="2019"
            />
            {state.fieldErrors?.annee && (
              <p className={errorClass}>{state.fieldErrors.annee[0]}</p>
            )}
          </div>
          <div>
            <label htmlFor="immatriculation" className={labelClass}>
              Immatriculation *
            </label>
            <input
              id="immatriculation" name="immatriculation" type="text" required
              value={fields.immatriculation} onChange={handleChange}
              className={cn(fieldClass, "uppercase")} placeholder="AB-123-CD"
            />
            {state.fieldErrors?.immatriculation && (
              <p className={errorClass}>{state.fieldErrors.immatriculation[0]}</p>
            )}
          </div>
        </div>
      </div>

      {/* Intervention */}
      <div className="border-t border-[#F0F0F0] my-6 pt-6">
        <h3 className="font-display font-bold text-base text-[#1A1A2E] mb-5">
          Intervention & Disponibilités
        </h3>
        <div className="mb-5">
          <label htmlFor="service" className={labelClass}>
            Type d&apos;intervention *
          </label>
          <select
            id="service" name="service" required
            value={fields.service}
            onChange={handleChange}
            className={fieldClass}
          >
            <option value="">— Choisissez un service —</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {state.fieldErrors?.service && (
            <p className={errorClass}>{state.fieldErrors.service[0]}</p>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="date" className={labelClass}>Date souhaitée *</label>
            <input
              id="date" name="date" type="date" required
              min={minDate}
              value={fields.date} onChange={handleChange}
              className={fieldClass}
            />
            {state.fieldErrors?.date && (
              <p className={errorClass}>{state.fieldErrors.date[0]}</p>
            )}
          </div>
          <div>
            <label className={labelClass}>Créneau *</label>
            <div className="flex gap-3">
              {[
                { value: "matin", label: "Matin (8h–12h)" },
                { value: "apresmidi", label: "Après-midi (14h–18h)" },
              ].map(({ value, label }) => (
                <label
                  key={value}
                  className="flex flex-1 items-center gap-2.5 rounded-xl border border-[#C8C8C8] px-4 py-3 cursor-pointer has-[:checked]:border-[#E94560] has-[:checked]:bg-[rgba(233,69,96,0.05)] transition-colors duration-150"
                >
                  <input
                    type="radio" name="creneau" value={value} required
                    checked={fields.creneau === value}
                    onChange={handleChange}
                    className="accent-[#E94560]"
                  />
                  <span className="font-body text-sm text-[#484848]">{label}</span>
                </label>
              ))}
            </div>
            {state.fieldErrors?.creneau && (
              <p className={errorClass}>{state.fieldErrors.creneau[0]}</p>
            )}
          </div>
        </div>
      </div>

      {/* Message */}
      <div className="mb-6">
        <label htmlFor="message" className={labelClass}>
          Message (facultatif)
        </label>
        <textarea
          id="message" name="message" rows={3}
          value={fields.message} onChange={handleChange}
          className={cn(fieldClass, "resize-none")}
          placeholder="Décrivez le problème ou ajoutez toute information utile…"
        />
      </div>

      {/* RGPD */}
      <label className="flex items-start gap-3 mb-7 cursor-pointer">
        <input
          type="checkbox" name="rgpd" required
          checked={fields.rgpd}
          onChange={handleChange}
          className="mt-0.5 flex-shrink-0 w-4 h-4 accent-[#E94560]"
        />
        <span className="font-body text-sm text-[#6B6B6B] leading-relaxed">
          J&apos;accepte que mes données soient utilisées pour traiter ma demande
          de rendez-vous, conformément à la{" "}
          <a
            href="/mentions-legales"
            className="text-[#E94560] underline underline-offset-2 hover:text-[#D03350]"
          >
            politique de confidentialité
          </a>
          . *
        </span>
        {state.fieldErrors?.rgpd && (
          <p className={errorClass}>{state.fieldErrors.rgpd[0]}</p>
        )}
      </label>

      <button
        type="submit"
        disabled={isPending}
        className="w-full h-14 rounded-xl bg-[#E94560] text-white font-display font-bold text-sm uppercase tracking-[0.08em] hover:bg-[#D03350] hover:shadow-[0_8px_30px_rgba(233,69,96,0.35)] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-150 flex items-center justify-center gap-2"
      >
        {isPending ? (
          <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
        ) : (
          "Envoyer ma demande"
        )}
      </button>
    </form>
  );
}
