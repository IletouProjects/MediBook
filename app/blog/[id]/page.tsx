import { getPostById } from "@/app/lib/posts";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";


type ArticlePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { id } = await params;
  const article = await getPostById(id);

  if (!article) {
    return {
      title: "Article introuvable",
    };
  }

  return {
    title: article.title,
    description: article.body.slice(0, 150),
  };
}

export default async function ArticleDetailsPage({
  params,
}: ArticlePageProps) {
  const { id } = await params;
  const article = await getPostById(id);

  if (!article) {
    notFound();
  }

  return (
    <article className="bg-white">
      <header className="border-b border-[#E9E9E9] bg-[#FAFAF8] py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5">
          <Link
            href="/blog"
            className="inline-flex border-b border-[#111111] pb-1 text-sm font-semibold text-[#111111] hover:border-[#FF6B1A] hover:text-[#FF6B1A]"
          >
            Retour aux articles
          </Link>

          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.16em] text-[#FF6B1A]">
            Article {String(article.id).padStart(2, "0")}
          </p>

          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#111111] first-letter:uppercase sm:text-5xl">
            {article.title}
          </h1>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-[#777777]">
            <span>Publication de démonstration</span>

            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-[#FF6B1A]"
            />

            <span>Lecture estimée : 2 minutes</span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-5 py-16 sm:py-20">
        <div className="border-l-4 border-[#FF6B1A] pl-6">
          <p className="text-lg font-medium leading-8 text-[#111111] first-letter:uppercase">
            {article.body}
          </p>
        </div>

        <div className="mt-12 space-y-6 leading-8 text-[#626262]">
          <p>
            Cette page utilise l’identifiant présent dans l’URL pour récupérer
            une publication précise depuis l’API JSONPlaceholder.
          </p>

          <p>
            Dans une version complète de MediBook, cette structure pourra
            accueillir des articles rédigés et vérifiés par des professionnels
            de santé.
          </p>
        </div>

        <div className="mt-14 rounded-2xl border border-[#FFD7C0] bg-[#FFF1E8] p-6">
          <h2 className="font-semibold text-[#111111]">
            Information importante
          </h2>

          <p className="mt-3 text-sm leading-7 text-[#555555]">
            Ce contenu est issu d’une API de test. Il ne constitue ni un
            diagnostic, ni une recommandation médicale.
          </p>
        </div>

        <div className="mt-14 border-t border-[#E9E9E9] pt-8">
          <Link
            href="/blog"
            className="inline-flex rounded-full bg-[#111111] px-7 py-4 font-semibold text-white hover:bg-[#2A2A2A]"
          >
            Voir les autres articles
          </Link>
        </div>
      </div>
    </article>
  );
}