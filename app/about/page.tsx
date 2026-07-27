import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "../components/SectionLabel";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez la mission, les principes et la vision de MediBook.",
};

const principles = [
  {
    number: "01",
    title: "Rendre le parcours compréhensible",
    description:
      "Chaque écran doit indiquer clairement ce que le patient peut faire et ce qui se passera ensuite.",
  },
  {
    number: "02",
    title: "Limiter les démarches inutiles",
    description:
      "Les informations sont demandées progressivement afin de ne pas surcharger l’utilisateur.",
  },
  {
    number: "03",
    title: "Présenter des informations fiables",
    description:
      "Les profils et disponibilités doivent être lisibles, structurés et faciles à vérifier.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="À propos"
        title="Faciliter l’accès à une consultation médicale"
        description="MediBook est pensé comme un point de rencontre simple entre les patients et les professionnels de santé."
      />

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionLabel>Constat</SectionLabel>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-[#071E3D] sm:text-4xl">
              La prise de rendez-vous reste parfois difficile à organiser
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              Un patient peut rencontrer des difficultés pour identifier le bon
              professionnel, connaître les horaires ou vérifier les
              disponibilités avant de se déplacer.
            </p>

            <p>
              Ces difficultés peuvent être plus importantes lorsque les
              informations sont dispersées, peu lisibles ou uniquement
              accessibles par téléphone.
            </p>

            <p>
              MediBook rassemble les informations nécessaires dans un parcours
              clair, accessible depuis un téléphone ou un ordinateur.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#F6F8FB] py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <SectionLabel>Principes du produit</SectionLabel>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-[#071E3D] sm:text-4xl">
              Une plateforme sobre et centrée sur le besoin du patient
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {principles.map((principle) => (
              <article
                key={principle.number}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <span className="text-sm font-semibold text-[#FF7900]">
                  {principle.number}
                </span>

                <h3 className="mt-8 text-xl font-semibold text-[#071E3D]">
                  {principle.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-8 rounded-3xl bg-[#071E3D] p-8 sm:p-10 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-white">
                Besoin d’aide pour organiser une consultation ?
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                L’équipe peut vous orienter dans l’utilisation de la plateforme
                et répondre à vos questions.
              </p>
            </div>

            <Link
              href="/contact"
              className="shrink-0 rounded-lg bg-[#FF7900] px-7 py-4 font-semibold text-white hover:bg-[#E86E00]"
            >
              Contacter l’équipe
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}