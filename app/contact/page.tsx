import type { Metadata } from "next";
import PageHero from "../components/PageHero";


export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez MediBook pour obtenir de l’aide ou poser une question.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Une question sur votre parcours de réservation ?"
        description="Décrivez votre besoin et l’équipe vous répondra avec les informations nécessaires."
      />

      <section className="bg-[#F6F8FB] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
          <aside>
            <h2 className="text-2xl font-semibold tracking-tight text-[#071E3D]">
              Informations pratiques
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Le formulaire peut être utilisé pour poser une question, signaler
              une difficulté ou demander des informations sur une réservation.
            </p>

            <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
              <div className="py-6">
                <p className="text-sm font-medium text-slate-500">
                  Adresse électronique
                </p>

                <p className="mt-2 font-semibold text-[#071E3D]">
                  support@medibook.tg
                </p>
              </div>

              <div className="py-6">
                <p className="text-sm font-medium text-slate-500">
                  Localisation
                </p>

                <p className="mt-2 font-semibold text-[#071E3D]">Lomé, Togo</p>
              </div>

              <div className="py-6">
                <p className="text-sm font-medium text-slate-500">
                  Disponibilité de l’assistance
                </p>

                <p className="mt-2 font-semibold text-[#071E3D]">
                  Du lundi au samedi
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-orange-200 bg-orange-50 p-5">
              <p className="text-sm leading-6 text-slate-700">
                En cas d’urgence médicale, contactez directement un service
                d’urgence ou rendez-vous dans l’établissement de santé le plus
                proche.
              </p>
            </div>
          </aside>

          <form className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="mb-2 block text-sm font-medium text-[#071E3D]"
                >
                  Prénom
                </label>

                <input
                  id="first-name"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  required
                  className="w-full rounded-lg border border-slate-200 px-4 py-4 outline-none focus:border-[#FF7900] focus:ring-4 focus:ring-orange-50"
                />
              </div>

              <div>
                <label
                  htmlFor="last-name"
                  className="mb-2 block text-sm font-medium text-[#071E3D]"
                >
                  Nom
                </label>

                <input
                  id="last-name"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  required
                  className="w-full rounded-lg border border-slate-200 px-4 py-4 outline-none focus:border-[#FF7900] focus:ring-4 focus:ring-orange-50"
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-[#071E3D]"
              >
                Adresse électronique
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full rounded-lg border border-slate-200 px-4 py-4 outline-none focus:border-[#FF7900] focus:ring-4 focus:ring-orange-50"
              />
            </div>

            <div className="mt-6">
              <label
                htmlFor="request-type"
                className="mb-2 block text-sm font-medium text-[#071E3D]"
              >
                Motif de la demande
              </label>

              <select
                id="request-type"
                name="requestType"
                defaultValue=""
                required
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-4 outline-none focus:border-[#FF7900] focus:ring-4 focus:ring-orange-50"
              >
                <option value="" disabled>
                  Sélectionner un motif
                </option>

                <option value="general">Question générale</option>
                <option value="appointment">Aide pour un rendez-vous</option>
                <option value="professional">
                  Inscription d’un professionnel
                </option>
                <option value="technical">Difficulté technique</option>
              </select>
            </div>

            <div className="mt-6">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-[#071E3D]"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                required
                placeholder="Décrivez brièvement votre demande."
                className="w-full resize-none rounded-lg border border-slate-200 px-4 py-4 outline-none placeholder:text-slate-400 focus:border-[#FF7900] focus:ring-4 focus:ring-orange-50"
              />
            </div>

            <div className="mt-7 flex items-start gap-3">
              <input
                id="consent"
                name="consent"
                type="checkbox"
                required
                className="mt-1 h-4 w-4 rounded border-slate-300 accent-[#FF7900]"
              />

              <label
                htmlFor="consent"
                className="text-sm leading-6 text-slate-600"
              >
                J’accepte que les informations saisies soient utilisées pour
                répondre à ma demande.
              </label>
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-lg bg-[#FF7900] px-6 py-4 font-semibold text-white hover:bg-[#E86E00]"
            >
              Envoyer la demande
            </button>

            <p className="mt-5 text-center text-xs leading-5 text-slate-500">
              Ne transmettez pas de données médicales sensibles dans ce
              formulaire général.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}