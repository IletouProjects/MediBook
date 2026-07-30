import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import { getPosts } from "../lib/posts";
import SectionLabel from "../components/SectionLabel";
import ArticleCard from "../components/ArticleCard";


export const metadata: Metadata = {
  title: "Articles",
  description:
    "Découvrez les articles et ressources proposés par MediBook.",
};


export default async function BlogPage() {
  const articles = await getPosts();

  return (
    <main>
      <PageHero
        label="Articles"
        title="Des ressources pour mieux préparer votre parcours"
        description="Retrouvez des contenus de démonstration présentés dans une interface claire et accessible."
      />

      <section className="bg-[#FAFAF8] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <SectionLabel>Dernières publications</SectionLabel>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-[#111111] sm:text-4xl">
                Des informations présentées simplement
              </h2>

              <p className="mt-5 leading-7 text-[#626262]">
                Cette section démontre la récupération et l’affichage de
                données depuis une API externe avec un Server Component
                Next.js.
              </p>
            </div>

            <p className="text-sm font-medium text-[#777777]">
              {articles.length} articles affichés
            </p>
          </div>

          {articles.length > 0 ? (
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article, index) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  position={index + 1}
                />
              ))}
            </div>
          ) : (
            <div className="mt-14 rounded-2xl border border-[#E9E9E9] bg-white p-10 text-center">
              <h2 className="text-xl font-semibold text-[#111111]">
                Aucun article disponible
              </h2>

              <p className="mt-3 text-[#626262]">
                Les publications apparaîtront dès qu’elles seront disponibles.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="rounded-2xl border border-[#FFD7C0] bg-[#FFF1E8] p-6">
            <p className="text-sm leading-7 text-[#555555]">
              Les textes affichés proviennent d’une API de démonstration. Ils
              ne constituent pas des recommandations médicales et ne remplacent
              pas l’avis d’un professionnel de santé.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}