import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/PageHero";
import SectionLabel from "../components/SectionLabel";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Découvrez les principales fonctionnalités proposées par MediBook.",
};

const services = [
  {
    number: "01",
    title: "Recherche par spécialité",
    description:
      "Le patient sélectionne le type de professionnel recherché et précise sa localisation.",
  },
  {
    number: "02",
    title: "Consultation des disponibilités",
    description:
      "Les créneaux sont présentés dans un format clair pour simplifier la comparaison.",
  },
  {
    number: "03",
    title: "Prise de rendez-vous",
    description:
      "Le patient sélectionne un horaire et renseigne les informations nécessaires à la réservation.",
  },
  {
    number: "04",
    title: "Confirmation du rendez-vous",
    description:
      "Une confirmation récapitule la date, l’heure, le professionnel et le lieu de consultation.",
  },
  {
    number: "05",
    title: "Suivi des demandes",
    description:
      "L’utilisateur peut retrouver ses réservations et vérifier leur statut.",
  },
  {
    number: "06",
    title: "Assistance utilisateur",
    description:
      "Un espace de contact permet de demander de l’aide en cas de difficulté.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="Les fonctions essentielles pour organiser un rendez-vous"
        description="MediBook rassemble les informations et les actions nécessaires dans un parcours unique."
      />

      <section className="bg-[#F6F8FB] py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <SectionLabel>Fonctionnalités</SectionLabel>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-[#071E3D] sm:text-4xl">
              Un service conçu autour des étapes réelles du patient
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Chaque fonctionnalité répond à une action concrète du parcours de
              réservation.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                  <span className="text-sm font-semibold text-[#FF7900]">
                    {service.number}
                  </span>

                  <span
                    aria-hidden="true"
                    className="h-px w-10 bg-slate-200"
                  />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-[#071E3D]">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-12 rounded-3xl border border-slate-200 p-8 sm:p-10 lg:grid-cols-[1fr_auto]">
            <div>
              <SectionLabel>Besoin d’assistance</SectionLabel>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#071E3D]">
                Une difficulté pendant votre réservation ?
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                Utilisez le formulaire de contact pour décrire votre problème
                et recevoir une réponse adaptée.
              </p>
            </div>

            <Link
              href="/contact"
              className="rounded-lg bg-[#071E3D] px-7 py-4 text-center font-semibold text-white hover:bg-[#0C315F]"
            >
              Accéder au contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}