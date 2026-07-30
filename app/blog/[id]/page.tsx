import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getPostById } from "@/app/lib/posts";

type BlogArticlePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { id } = await params;
  const article = await getPostById(id);

  if (!article) {
    return {
      title: "Article introuvable",
      description:
        "L’article demandé n’est pas disponible.",
    };
  }

  return {
    title: article.title,
    description: article.body.slice(0, 155),
    openGraph: {
      type: "article",
      title: article.title,
      description: article.body.slice(0, 155),
      url: `/blog/${article.id}`,
    },
  };
}

export default async function BlogArticlePage({
  params,
}: BlogArticlePageProps) {
  const { id } = await params;
  const article = await getPostById(id);

  if (!article) {
    notFound();
  }

  return (
    <main>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
    </main>
  );
}