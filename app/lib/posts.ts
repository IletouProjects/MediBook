import { Post } from "../types/post";


const API_URL = "https://jsonplaceholder.typicode.com/posts";

function logFetchError(error: unknown): void {
  console.error("Erreur complète :", error);

  if (error instanceof Error) {
    console.error("Nom :", error.name);
    console.error("Message :", error.message);

    if ("cause" in error) {
      console.error("Cause réseau :", error.cause);
    }
  }
}

export async function getPosts(): Promise<Post[]> {
  try {
    const response = await fetch(API_URL, {
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      throw new Error(`Erreur HTTP ${response.status}`);
    }

    const posts = (await response.json()) as Post[];

    return posts.slice(0, 12);
  } catch (error) {
    logFetchError(error);

    throw new Error(
      "Impossible de joindre le service des articles. Vérifiez la connexion réseau.",
    );
  }
}

export async function getPostById(id: string): Promise<Post | null> {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
      signal: AbortSignal.timeout(10_000),
    });

    if (response.status === 404) {
      return null;
    }

    if (!response.ok) {
      throw new Error(`Erreur HTTP ${response.status}`);
    }

    const post = (await response.json()) as Post;

    return post.id ? post : null;
  } catch (error) {
    logFetchError(error);

    throw new Error(
      "Impossible de joindre le service des articles.",
    );
  }
}