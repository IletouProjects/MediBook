import Link from "next/link";
import { Post } from "../types/post";


type ArticleCardProps = {
  article: Post;
  position: number;
};

function formatNumber(value: number): string {
  return String(value).padStart(2, "0");
}

export default function ArticleCard({
  article,
  position,
}: ArticleCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-[#E9E9E9] bg-white p-7 transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.07)]">
      <div className="flex items-center justify-between border-b border-[#EEEEEE] pb-5">
        <span className="text-sm font-semibold text-[#FF6B1A]">
          Article {formatNumber(position)}
        </span>

        <span className="text-xs font-medium uppercase tracking-[0.12em] text-[#999999]">
          Information
        </span>
      </div>

      <h2 className="mt-7 text-xl font-semibold leading-7 text-[#111111] first-letter:uppercase">
        {article.title}
      </h2>

      <p className="mt-4 line-clamp-3 leading-7 text-[#626262] first-letter:uppercase">
        {article.body}
      </p>

      <div className="mt-auto pt-8">
        <Link
          href={`/blog/${article.id}`}
          aria-label={`Lire l’article : ${article.title}`}
          className="inline-flex border-b border-[#111111] pb-1 text-sm font-semibold text-[#111111] hover:border-[#FF6B1A] hover:text-[#FF6B1A]"
        >
          Lire l’article
        </Link>
      </div>
    </article>
  );
}