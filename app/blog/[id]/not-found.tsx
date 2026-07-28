import Link from "next/link";

export default function ArticleNotFound() {
  return (
    <section className="flex min-h-[65vh] items-center bg-[#FAFAF8] py-20">
      <div className="mx-auto w-full max-w-3xl px-5">
        <div className="rounded-3xl border border-[#E9E9E9] bg-white p-8 text-center sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#FF6B1A]">
            Article introuvable
          </p>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[#111111]">
            Ce contenu n’est pas disponible
          </h1>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-[#626262]">
            L’article demandé n’existe pas ou n’est plus accessible.
          </p>

          <Link
            href="/blog"
            className="mt-8 inline-flex rounded-full bg-[#111111] px-7 py-4 font-semibold text-white hover:bg-[#2A2A2A]"
          >
            Consulter les autres articles
          </Link>
        </div>
      </div>
    </section>
  );
}