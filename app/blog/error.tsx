"use client";

import { useEffect } from "react";
import Link from "next/link";

type BlogErrorProps = {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
};

export default function BlogError({
  error,
  reset,
}: BlogErrorProps) {
  useEffect(() => {
    console.error("Erreur dans la section Articles :", error);
  }, [error]);

  return (
    <section className="flex min-h-[65vh] items-center bg-[#FAFAF8] py-20">
      <div className="mx-auto w-full max-w-3xl px-5">
        <div className="rounded-3xl border border-[#E9E9E9] bg-white p-8 text-center shadow-[0_18px_45px_rgba(0,0,0,0.06)] sm:p-12">
          <div
            aria-hidden="true"
            className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#FFF1E8]"
          >
            <span className="h-3 w-3 rounded-full bg-[#FF6B1A]" />
          </div>

          <p className="mt-7 text-sm font-semibold uppercase tracking-[0.16em] text-[#FF6B1A]">
            Service temporairement indisponible
          </p>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[#111111]">
            Les articles ne peuvent pas être chargés
          </h1>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-[#626262]">
            Le service de données ne répond pas correctement pour le moment.
            Vous pouvez relancer la récupération ou revenir à l’accueil.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={reset}
              className="rounded-full bg-[#FF6B1A] px-7 py-4 font-semibold text-white hover:bg-[#E95D0D]"
            >
              Réessayer
            </button>

            <Link
              href="/"
              className="rounded-full border border-[#DCDCDC] bg-white px-7 py-4 font-semibold text-[#111111] hover:border-[#111111]"
            >
              Retour à l’accueil
            </Link>
          </div>

          {error.digest && (
            <p className="mt-8 text-xs text-[#999999]">
              Référence technique : {error.digest}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}