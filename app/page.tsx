import Link from "next/link";
import SectionLabel from "./components/SectionLabel";
import type { Metadata } from "next";
import Image from "next/image";

const appointmentSteps = [
  {
    number: "01",
    title: "Indiquez votre besoin",
    description:
      "Choisissez une spécialité et précisez la zone dans laquelle vous souhaitez consulter.",
  },
  {
    number: "02",
    title: "Comparez les créneaux",
    description:
      "Consultez les disponibilités proposées et sélectionnez l’horaire qui vous convient.",
  },
  {
    number: "03",
    title: "Confirmez la consultation",
    description:
      "Renseignez les informations nécessaires et recevez le récapitulatif du rendez-vous.",
  },
];

const platformBenefits = [
  {
    number: "01",
    title: "Un parcours clair",
    description:
      "Chaque écran présente une seule action importante pour éviter de surcharger l’utilisateur.",
  },
  {
    number: "02",
    title: "Des informations utiles",
    description:
      "Les horaires, les spécialités et les lieux de consultation sont présentés avant la validation.",
  },
  {
    number: "03",
    title: "Une interface accessible",
    description:
      "L’expérience reste lisible et utilisable depuis un téléphone, une tablette ou un ordinateur.",
  },
];

const specialties = [
  "Médecine générale",
  "Pédiatrie",
  "Cardiologie",
  "Dermatologie",
  "Gynécologie",
  "Ophtalmologie",
];

export const metadata: Metadata = {
  title: "Rendez-vous médicaux en ligne",
  description:
    "Trouvez un professionnel de santé et prenez rendez-vous facilement avec MediBook.",
};

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="overflow-hidden bg-white">
        <div className="mx-auto grid min-h-auto max-w-7xl items-center gap-10 px-4 py-10 sm:px-5 sm:py-14 lg:min-h-[700px] lg:grid-cols-[1fr_1fr] lg:gap-14 lg:px-8 lg:py-20">
          {/* Partie gauche */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E9E9E9] bg-white px-3 py-1.5 shadow-[0_5px_18px_rgba(0,0,0,0.07)] sm:px-4 sm:py-2">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-[#FF6B1A] sm:h-2 sm:w-2"
              />

              <span className="text-[11px] font-medium text-[#555555] sm:text-sm">
                Une consultation plus simple à organiser
              </span>
            </div>

            <h1 className="mt-6 max-w-3xl text-3xl font-semibold leading-[1.12] tracking-[-0.04em] text-[#111111] sm:mt-8 sm:text-5xl lg:text-6xl">
              Trouvez plus facilement
              <span className="text-[#FF6B1A]"> le professionnel</span> adapté à
              votre besoin.
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-6 text-[#626262] sm:mt-6 sm:text-base sm:leading-8">
              Recherchez une spécialité, consultez les disponibilités et
              organisez votre rendez-vous sans appel ni déplacement inutile.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 sm:mt-9 sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF6B1A] px-4 py-2.5 text-xs font-semibold text-white shadow-[0_8px_20px_rgba(255,107,26,0.24)] hover:bg-[#E95D0D] sm:gap-3 sm:px-7 sm:py-3 sm:text-base"
              >
                Prendre rendez-vous
                <span
                  aria-hidden="true"
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm text-[#FF6B1A] sm:h-9 sm:w-9 sm:text-lg"
                >
                  →
                </span>
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-[#DCDCDC] bg-white px-4 py-2.5 text-xs font-semibold text-[#111111] hover:border-[#111111] sm:px-7 sm:py-4 sm:text-base"
              >
                Découvrir les services
              </Link>
            </div>

            <div className="mt-10 grid gap-5 border-t border-[#E9E9E9] pt-6 sm:mt-14 sm:grid-cols-3 sm:gap-6 sm:pt-8">
              <div>
                <p className="text-sm font-semibold text-[#111111] sm:text-base">
                  Accessible
                </p>
                <p className="mt-1 text-xs leading-5 text-[#626262] sm:mt-2 sm:text-sm sm:leading-6">
                  Depuis un téléphone, une tablette ou un ordinateur.
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-[#111111] sm:text-base">
                  Compréhensible
                </p>
                <p className="mt-1 text-xs leading-5 text-[#626262] sm:mt-2 sm:text-sm sm:leading-6">
                  Des étapes courtes et clairement expliquées.
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-[#111111] sm:text-base">
                  Rassurant
                </p>
                <p className="mt-1 text-xs leading-5 text-[#626262] sm:mt-2 sm:text-sm sm:leading-6">
                  Les informations utiles avant la validation.
                </p>
              </div>
            </div>
          </div>

          {/* Partie droite */}
          <div className="relative min-h-[500px] sm:min-h-[560px] lg:min-h-[620px]">
            <div
              aria-hidden="true"
              className="absolute inset-x-10 bottom-8 h-20 rounded-full bg-black/10 blur-3xl sm:inset-x-16 sm:h-24"
            />

            <div className="absolute left-1/2 top-1/2 z-10 w-full max-w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-[1.75rem] border border-[#EAEAEA] bg-[#FAFAF8] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.1)] sm:max-w-[470px] sm:rounded-[2.5rem] sm:p-6 sm:shadow-[0_30px_70px_rgba(0,0,0,0.13)]">
              <div className="rounded-[1.4rem] bg-white p-5 sm:rounded-[2rem] sm:p-7">
                <div className="border-b border-[#EEEEEE] pb-4 sm:pb-6">
                  <p className="text-xs font-semibold text-[#FF6B1A] sm:text-sm">
                    Nouvelle réservation
                  </p>

                  <h2 className="mt-2 text-xl font-semibold text-[#111111] sm:mt-3 sm:text-2xl">
                    Trouver une consultation
                  </h2>

                  <p className="mt-2 text-xs leading-5 text-[#626262] sm:mt-3 sm:text-sm sm:leading-6">
                    Renseignez quelques informations pour afficher les créneaux
                    disponibles.
                  </p>
                </div>

                <form className="mt-5 space-y-4 sm:mt-7 sm:space-y-5">
                  <div>
                    <label
                      htmlFor="speciality"
                      className="mb-1.5 block text-xs font-medium text-[#222222] sm:mb-2 sm:text-sm"
                    >
                      Spécialité
                    </label>

                    <select
                      id="speciality"
                      name="speciality"
                      defaultValue=""
                      className="w-full rounded-xl border border-[#E2E2E2] bg-white px-3 py-3 text-xs text-[#555555] outline-none focus:border-[#FF6B1A] focus:ring-4 focus:ring-orange-50 sm:px-4 sm:py-4 sm:text-sm"
                    >
                      <option value="" disabled>
                        Sélectionner une spécialité
                      </option>

                      {specialties.map((specialty) => (
                        <option key={specialty} value={specialty}>
                          {specialty}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="location"
                      className="mb-1.5 block text-xs font-medium text-[#222222] sm:mb-2 sm:text-sm"
                    >
                      Ville ou quartier
                    </label>

                    <input
                      id="location"
                      name="location"
                      type="text"
                      placeholder="Exemple : Lomé, Tokoin"
                      className="w-full rounded-xl border border-[#E2E2E2] px-3 py-3 text-xs text-[#555555] outline-none placeholder:text-[#A0A0A0] focus:border-[#FF6B1A] focus:ring-4 focus:ring-orange-50 sm:px-4 sm:py-4 sm:text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="appointment-date"
                      className="mb-1.5 block text-xs font-medium text-[#222222] sm:mb-2 sm:text-sm"
                    >
                      Date souhaitée
                    </label>

                    <input
                      id="appointment-date"
                      name="appointmentDate"
                      type="date"
                      className="w-full rounded-xl border border-[#E2E2E2] px-3 py-3 text-xs text-[#555555] outline-none focus:border-[#FF6B1A] focus:ring-4 focus:ring-orange-50 sm:px-4 sm:py-4 sm:text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#111111] px-4 py-3 text-xs font-semibold text-white hover:bg-[#2A2A2A] sm:px-5 sm:py-4 sm:text-base"
                  >
                    Rechercher les disponibilités
                  </button>
                </form>
              </div>
            </div>

            {/* Miniature photo */}
            <div className="absolute right-0 top-8 z-20 hidden w-[150px] overflow-hidden rounded-3xl border-[5px] border-white bg-white shadow-[0_14px_34px_rgba(0,0,0,0.15)] md:block lg:w-[175px] lg:border-[6px]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[16px] bg-[#FFF1E8] lg:rounded-[18px]">
                <Image
                  src="/images/doctor1.jpg"
                  alt="Médecin échangeant avec une patiente"
                  fill
                  priority
                  sizes="175px"
                  className="object-cover object-center"
                />
              </div>

              <div className="px-3 py-2.5 lg:px-4 lg:py-3">
                <p className="text-[10px] font-semibold text-[#111111] lg:text-xs">
                  Accompagnement médical
                </p>

                <p className="mt-1 text-[9px] leading-4 text-[#777777] lg:text-[11px]">
                  Une prise en charge plus accessible.
                </p>
              </div>
            </div>

            <div className="absolute left-0 top-16 z-20 hidden rounded-full border border-[#E9E9E9] bg-white px-3 py-2 text-xs font-medium text-[#333333] shadow-[0_8px_20px_rgba(0,0,0,0.09)] md:block lg:px-4 lg:py-3 lg:text-sm">
              Professionnels disponibles
            </div>

            <div className="absolute bottom-20 left-0 z-20 hidden rounded-full border border-[#E9E9E9] bg-white px-3 py-2 text-xs font-medium text-[#333333] shadow-[0_8px_20px_rgba(0,0,0,0.09)] md:block lg:px-4 lg:py-3 lg:text-sm">
              Réservation guidée
            </div>

            <div className="absolute bottom-10 right-0 z-20 hidden rounded-full border border-[#E9E9E9] bg-white px-3 py-2 text-xs font-medium text-[#333333] shadow-[0_8px_20px_rgba(0,0,0,0.09)] lg:block lg:px-4 lg:py-3 lg:text-sm">
              Accessible sur mobile
            </div>
          </div>
        </div>
      </section>

      {/* FONCTIONNEMENT */}
      <section className="border-y border-[#E9E9E9] bg-[#FAFAF8] py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <SectionLabel>Comment ça fonctionne</SectionLabel>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-[#111111] sm:text-4xl">
                Un parcours simple, du besoin au rendez-vous
              </h2>

              <p className="mt-5 leading-7 text-[#626262]">
                Chaque étape est présentée clairement pour permettre au patient
                d’avancer sans hésitation.
              </p>
            </div>

            <Link
              href="/services"
              className="inline-flex w-fit border-b border-[#111111] pb-1 text-sm font-semibold text-[#111111] hover:border-[#FF6B1A] hover:text-[#FF6B1A]"
            >
              Consulter tous les services
            </Link>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {appointmentSteps.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-[#E9E9E9] bg-white p-7 transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.07)]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#FF6B1A]">
                    {step.number}
                  </span>

                  <span aria-hidden="true" className="h-px w-12 bg-[#E4E4E4]" />
                </div>

                <h3 className="mt-10 text-xl font-semibold text-[#111111]">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-[#626262]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BÉNÉFICES */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:px-8">
          <div className="relative rounded-[2rem] bg-[#F5F5F2] p-8 sm:p-10">
            <div className="rounded-[1.5rem] border border-[#E6E6E2] bg-white p-7 shadow-[0_18px_45px_rgba(0,0,0,0.06)]">
              <p className="text-sm font-semibold text-[#FF6B1A]">
                Votre prochain rendez-vous
              </p>

              <div className="mt-6 border-y border-[#EEEEEE] py-6">
                <p className="text-sm text-[#777777]">Spécialité</p>
                <p className="mt-2 text-lg font-semibold text-[#111111]">
                  Médecine générale
                </p>
              </div>

              <div className="grid gap-6 border-b border-[#EEEEEE] py-6 sm:grid-cols-2">
                <div>
                  <p className="text-sm text-[#777777]">Date</p>
                  <p className="mt-2 font-semibold text-[#111111]">
                    Mardi 28 juillet
                  </p>
                </div>

                <div>
                  <p className="text-sm text-[#777777]">Heure</p>
                  <p className="mt-2 font-semibold text-[#111111]">15 h 30</p>
                </div>
              </div>

              <div className="pt-6">
                <p className="text-sm text-[#777777]">Lieu de consultation</p>
                <p className="mt-2 font-semibold text-[#111111]">
                  Centre médical, Lomé
                </p>
              </div>

              <button
                type="button"
                className="mt-8 w-full rounded-full bg-[#111111] px-5 py-4 font-semibold text-white hover:bg-[#2A2A2A]"
              >
                Consulter le récapitulatif
              </button>
            </div>

            <div className="absolute -right-4 top-10 hidden rounded-full border border-[#E9E9E9] bg-white px-4 py-3 text-sm font-medium text-[#333333] shadow-[0_8px_22px_rgba(0,0,0,0.1)] sm:block">
              Informations vérifiables
            </div>

            <div className="absolute -bottom-5 left-10 hidden rounded-full border border-[#E9E9E9] bg-white px-4 py-3 text-sm font-medium text-[#333333] shadow-[0_8px_22px_rgba(0,0,0,0.1)] sm:block">
              Confirmation claire
            </div>
          </div>

          <div>
            <SectionLabel>Une expérience plus rassurante</SectionLabel>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-[#111111] sm:text-4xl">
              Les informations importantes restent visibles
            </h2>

            <p className="mt-6 leading-8 text-[#626262]">
              Avant de confirmer, le patient retrouve la spécialité, la date,
              l’heure et le lieu de la consultation dans un récapitulatif
              simple.
            </p>

            <div className="mt-10 divide-y divide-[#E9E9E9] border-y border-[#E9E9E9]">
              {platformBenefits.map((benefit) => (
                <article
                  key={benefit.number}
                  className="grid gap-4 py-6 sm:grid-cols-[50px_1fr]"
                >
                  <span className="text-sm font-semibold text-[#FF6B1A]">
                    {benefit.number}
                  </span>

                  <div>
                    <h3 className="font-semibold text-[#111111]">
                      {benefit.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#626262]">
                      {benefit.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="border-y border-[#E9E9E9] bg-[#FAFAF8] py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <SectionLabel>Ressources</SectionLabel>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-[#111111] sm:text-4xl">
                Des articles pour mieux préparer votre parcours
              </h2>

              <p className="mt-5 leading-7 text-[#626262]">
                Découvrez des contenus pédagogiques et des informations utiles
                avant votre consultation.
              </p>
            </div>

            <Link
              href="/blog"
              className="inline-flex w-fit rounded-full border border-[#DCDCDC] bg-white px-6 py-3 font-semibold text-[#111111] hover:border-[#111111]"
            >
              Voir les articles
            </Link>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Préparer les informations utiles",
                description:
                  "Identifiez les informations qui permettront au professionnel de mieux comprendre votre demande.",
              },
              {
                number: "02",
                title: "Choisir une spécialité",
                description:
                  "Comprenez comment sélectionner le professionnel correspondant à votre besoin.",
              },
              {
                number: "03",
                title: "Organiser votre disponibilité",
                description:
                  "Choisissez un créneau compatible avec votre emploi du temps et vos contraintes.",
              },
            ].map((article) => (
              <article
                key={article.number}
                className="rounded-2xl border border-[#E9E9E9] bg-white p-7"
              >
                <span className="text-sm font-semibold text-[#FF6B1A]">
                  Article {article.number}
                </span>

                <h3 className="mt-8 text-xl font-semibold text-[#111111]">
                  {article.title}
                </h3>

                <p className="mt-4 leading-7 text-[#626262]">
                  {article.description}
                </p>

                <Link
                  href="/blog"
                  className="mt-8 inline-flex border-b border-[#111111] pb-1 text-sm font-semibold text-[#111111] hover:border-[#FF6B1A] hover:text-[#FF6B1A]"
                >
                  Lire les publications
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* APPEL À L’ACTION */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#111111] px-7 py-14 text-white sm:px-12 lg:px-16">
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#FF6B1A]/20 blur-3xl"
            />

            <div className="relative flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#FF8E50]">
                  Commencer une réservation
                </p>

                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl">
                  Organisez votre prochaine consultation sans démarche
                  compliquée.
                </h2>

                <p className="mt-5 leading-7 text-[#C8C8C8]">
                  Décrivez votre besoin et accédez aux informations nécessaires
                  pour avancer.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#FF6B1A] px-7 py-3 font-semibold text-white hover:bg-[#E95D0D]"
              >
                Prendre rendez-vous
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#FF6B1A]"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
