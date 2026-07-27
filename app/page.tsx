import Link from "next/link";
import SectionLabel from "./components/SectionLabel";


const appointmentSteps = [
  {
    number: "01",
    title: "Décrivez votre besoin",
    description:
      "Sélectionnez une spécialité et indiquez la zone dans laquelle vous souhaitez consulter.",
  },
  {
    number: "02",
    title: "Consultez les disponibilités",
    description:
      "Comparez les créneaux proposés et choisissez celui qui correspond à votre emploi du temps.",
  },
  {
    number: "03",
    title: "Confirmez le rendez-vous",
    description:
      "Renseignez les informations nécessaires et recevez la confirmation de votre consultation.",
  },
];

const reassurancePoints = [
  "Informations lisibles avant la réservation",
  "Créneaux présentés clairement",
  "Parcours utilisable sur mobile",
  "Assistance accessible en cas de difficulté",
];

const specialities = [
  "Médecine générale",
  "Pédiatrie",
  "Cardiologie",
  "Dermatologie",
  "Gynécologie",
  "Ophtalmologie",
];

export default function HomePage() {
  return (
    <>
      <section className="overflow-hidden bg-white">
        <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-16 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-[#FF7900]"
              />

              <span className="text-sm font-medium text-slate-600">
                Organisez votre consultation plus facilement
              </span>
            </div>

            <h1 className="mt-8 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-[#071E3D] sm:text-5xl lg:text-6xl">
              Trouvez un professionnel de santé adapté à votre besoin.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Recherchez une spécialité, consultez les créneaux disponibles et
              préparez votre rendez-vous sans procédure complexe.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-lg bg-[#FF7900] px-7 py-4 text-center font-semibold text-white hover:bg-[#E86E00]"
              >
                Prendre rendez-vous
              </Link>

              <Link
                href="/services"
                className="rounded-lg border border-slate-300 bg-white px-7 py-4 text-center font-semibold text-[#071E3D] hover:border-[#071E3D]"
              >
                Consulter les services
              </Link>
            </div>

            <div className="mt-12 grid max-w-xl gap-6 border-t border-slate-200 pt-8 sm:grid-cols-3">
              <div>
                <p className="text-base font-semibold text-[#071E3D]">
                  Accessible
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Depuis un téléphone, une tablette ou un ordinateur.
                </p>
              </div>

              <div>
                <p className="text-base font-semibold text-[#071E3D]">
                  Compréhensible
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Des étapes courtes et clairement expliquées.
                </p>
              </div>

              <div>
                <p className="text-base font-semibold text-[#071E3D]">
                  Rassurant
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Les informations essentielles avant la validation.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-orange-100 blur-3xl"
            />

            <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_25px_80px_rgba(7,30,61,0.13)] sm:p-8">
              <div className="border-b border-slate-100 pb-6">
                <p className="text-sm font-semibold text-[#FF7900]">
                  Recherche de consultation
                </p>

                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#071E3D]">
                  De quel professionnel avez-vous besoin ?
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Indiquez quelques informations pour afficher les
                  disponibilités pertinentes.
                </p>
              </div>

              <form className="mt-7 space-y-5">
                <div>
                  <label
                    htmlFor="speciality"
                    className="mb-2 block text-sm font-medium text-[#071E3D]"
                  >
                    Spécialité
                  </label>

                  <select
                    id="speciality"
                    name="speciality"
                    defaultValue=""
                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-4 text-slate-700 outline-none focus:border-[#FF7900] focus:ring-4 focus:ring-orange-50"
                  >
                    <option value="" disabled>
                      Sélectionner une spécialité
                    </option>

                    {specialities.map((speciality) => (
                      <option key={speciality} value={speciality}>
                        {speciality}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="location"
                    className="mb-2 block text-sm font-medium text-[#071E3D]"
                  >
                    Ville ou quartier
                  </label>

                  <input
                    id="location"
                    name="location"
                    type="text"
                    placeholder="Exemple : Lomé, Tokoin"
                    className="w-full rounded-lg border border-slate-200 px-4 py-4 text-slate-700 outline-none placeholder:text-slate-400 focus:border-[#FF7900] focus:ring-4 focus:ring-orange-50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="appointment-date"
                    className="mb-2 block text-sm font-medium text-[#071E3D]"
                  >
                    Date souhaitée
                  </label>

                  <input
                    id="appointment-date"
                    name="appointmentDate"
                    type="date"
                    className="w-full rounded-lg border border-slate-200 px-4 py-4 text-slate-700 outline-none focus:border-[#FF7900] focus:ring-4 focus:ring-orange-50"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#071E3D] px-5 py-4 font-semibold text-white hover:bg-[#0C315F]"
                >
                  Rechercher des disponibilités
                </button>
              </form>

              <p className="mt-5 text-center text-xs leading-5 text-slate-500">
                Cette recherche ne remplace pas une prise en charge médicale
                urgente.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#F6F8FB] py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <SectionLabel>Fonctionnement</SectionLabel>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-[#071E3D] sm:text-4xl">
              Trois étapes pour organiser une consultation
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Le parcours limite les informations demandées et présente une
              seule décision importante à chaque étape.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {appointmentSteps.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <span className="text-sm font-semibold text-[#FF7900]">
                  {step.number}
                </span>

                <h3 className="mt-8 text-xl font-semibold text-[#071E3D]">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <div className="rounded-3xl bg-[#071E3D] p-8 sm:p-10">
            <SectionLabel light>Avant la consultation</SectionLabel>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] text-white">
              Des informations utiles, présentées sans surcharge
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              Le patient doit pouvoir vérifier les éléments essentiels sans
              parcourir plusieurs écrans difficiles à comprendre.
            </p>

            <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
              {reassurancePoints.map((point) => (
                <div key={point} className="flex items-center gap-4 py-4">
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 shrink-0 rounded-full bg-[#FF7900]"
                  />

                  <p className="text-sm text-slate-200">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionLabel>Une expérience plus humaine</SectionLabel>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-[#071E3D] sm:text-4xl">
              Une interface conçue pour rassurer, pas pour impressionner
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              La plateforme privilégie la lisibilité, un vocabulaire simple et
              des actions clairement identifiables. Chaque écran aide
              l’utilisateur à comprendre ce qu’il doit faire et pourquoi
              certaines informations sont demandées.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Les couleurs, les espacements et les contrastes servent
              directement le parcours du patient plutôt que de multiplier les
              effets visuels.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-flex border-b border-[#071E3D] pb-1 font-semibold text-[#071E3D] hover:border-[#FF7900] hover:text-[#FF7900]"
            >
              Lire la présentation du projet
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}