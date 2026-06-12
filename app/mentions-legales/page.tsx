import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales & Politique de confidentialité",
  description:
    "Mentions légales, politique de confidentialité et conditions d'utilisation du site 2F AUTO37 — SIREN 984 070 870.",
};

export default function MentionsLegalesPage() {
  const year = new Date().getFullYear();

  return (
    <div className="bg-[#F8F9FA]">
      <div className="bg-[#1A1A2E] py-12">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <h1 className="font-display font-bold text-white" style={{ fontSize: "clamp(1.75rem, 3vw + 0.5rem, 2.5rem)" }}>
            Mentions légales & Confidentialité
          </h1>
          <p className="font-body text-white/55 text-sm mt-2">Dernière mise à jour : {year}</p>
        </div>
      </div>

      <div className="mx-auto max-w-[900px] px-6 lg:px-8 py-14">
        <div className="bg-white rounded-2xl border border-[#E8E8E8] p-8 lg:p-12 prose prose-slate max-w-none">
          <style>{`
            .prose h2 { font-family: var(--font-display); color: #1A1A2E; font-size: 1.25rem; font-weight: 700; margin-top: 2.5rem; margin-bottom: 0.75rem; border-bottom: 2px solid #E94560; padding-bottom: 0.5rem; display: inline-block; }
            .prose h3 { font-family: var(--font-display); color: #1A1A2E; font-size: 1rem; font-weight: 700; margin-top: 1.5rem; }
            .prose p, .prose li { font-family: var(--font-body); color: #484848; line-height: 1.75; }
            .prose strong { color: #1A1A2E; font-weight: 600; }
            .prose a { color: #E94560; }
          `}</style>

          <h2>1. Éditeur du site</h2>
          <p>
            Le présent site est édité par :<br />
            <strong>Raison sociale :</strong> 2F AUTO37<br />
            <strong>Forme juridique :</strong> SARL (associé unique)<br />
            <strong>SIREN :</strong> 984 070 870<br />
            <strong>SIRET :</strong> 984 070 870 00014<br />
            <strong>Code NAF :</strong> 4520A — Entretien et réparation de véhicules automobiles légers<br />
            <strong>Gérant :</strong> Tony Fonseca<br />
            <strong>Adresse :</strong> 123 Chemin des Saulniers, 37800 Sainte-Maure-de-Touraine (Indre-et-Loire)<br />
            <strong>Téléphone :</strong> 09 88 09 53 65<br />
            <strong>Email :</strong> mabilachrisna@gmail.com<br />
            <strong>Convention collective :</strong> Services de l&apos;automobile (IDCC 1090)
          </p>

          <h2>2. Hébergement</h2>
          <p>
            Ce site est hébergé par <strong>Vercel Inc.</strong>, 340 Pine Street, Suite 701, San Francisco, CA 94104, USA.
          </p>

          <h2>3. Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble du contenu du site (textes, images, logos, structure) est la propriété exclusive de 2F AUTO37 ou de ses partenaires et est protégé par le droit de la propriété intellectuelle. Toute reproduction, même partielle, est interdite sans autorisation préalable écrite.
          </p>

          <h2>4. Politique de confidentialité (RGPD)</h2>

          <h3>4.1 Données collectées</h3>
          <p>
            Lors de l&apos;utilisation des formulaires de contact et de prise de rendez-vous, nous collectons les données suivantes :
          </p>
          <ul>
            <li>Nom, prénom</li>
            <li>Adresse email</li>
            <li>Numéro de téléphone</li>
            <li>Informations sur le véhicule (marque, modèle, année, immatriculation)</li>
            <li>Message libre</li>
          </ul>

          <h3>4.2 Finalité du traitement</h3>
          <p>
            Ces données sont collectées dans le seul but de traiter votre demande de contact ou de rendez-vous. Elles ne sont pas utilisées à des fins commerciales et ne sont pas transmises à des tiers sans votre consentement.
          </p>

          <h3>4.3 Durée de conservation</h3>
          <p>
            Vos données sont conservées pendant la durée nécessaire au traitement de votre demande, et au maximum 3 ans à compter du dernier contact, conformément aux recommandations de la CNIL.
          </p>

          <h3>4.4 Vos droits</h3>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants :
          </p>
          <ul>
            <li>Droit d&apos;accès à vos données personnelles</li>
            <li>Droit de rectification</li>
            <li>Droit à l&apos;effacement (&quot;droit à l&apos;oubli&quot;)</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit à la portabilité</li>
            <li>Droit d&apos;opposition</li>
          </ul>
          <p>
            Pour exercer ces droits, contactez-nous à : <strong>mabilachrisna@gmail.com</strong> ou par courrier à l&apos;adresse du garage.
          </p>
          <p>
            Vous pouvez également introduire une réclamation auprès de la <strong>CNIL</strong> (Commission Nationale de l&apos;Informatique et des Libertés) — <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>.
          </p>

          <h2>5. Cookies</h2>
          <p>
            Ce site utilise des cookies techniques strictement nécessaires à son fonctionnement. Aucun cookie publicitaire ou de traçage tiers n&apos;est déposé sans votre consentement. En continuant à naviguer sur ce site, vous acceptez l&apos;utilisation de ces cookies fonctionnels.
          </p>

          <h2>6. Limitation de responsabilité</h2>
          <p>
            2F AUTO37 s&apos;efforce d&apos;assurer l&apos;exactitude des informations publiées sur ce site mais ne peut garantir leur exhaustivité. Les informations (tarifs, horaires, disponibilités) sont données à titre indicatif et peuvent être modifiées sans préavis.
          </p>

          <h2>7. Droit applicable</h2>
          <p>
            Le présent site et ses mentions légales sont soumis au droit français. Tout litige relève de la compétence exclusive des tribunaux français.
          </p>

          <p className="mt-10 pt-6 border-t border-[#F0F0F0] text-xs text-[#8C8C8C]">
            © {year} 2F AUTO37 SARL — SIREN 984 070 870. Tous droits réservés.
          </p>
        </div>
      </div>
    </div>
  );
}
