import Link from "next/link";

type LogoProps = {
  light?: boolean;
};

export default function Logo({ light = false }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Retour à l’accueil MediBook"
      className="inline-flex items-center gap-3"
    >
      <span
        aria-hidden="true"
        className="relative flex h-10 w-10 items-center justify-center"
      >
        <span className="absolute h-7 w-2 rotate-[28deg] rounded-full bg-[#FF6B1A]" />
        <span className="absolute h-5 w-2 -translate-x-2 rotate-[28deg] rounded-full bg-[#FF6B1A]/70" />
        <span className="absolute h-4 w-2 translate-x-2 rotate-[28deg] rounded-full bg-[#FF6B1A]/40" />
      </span>

      <span
        className={`text-xl font-semibold tracking-[0.04em] ${
          light ? "text-white" : "text-[#111111]"
        }`}
      >
        MediBook
      </span>
    </Link>
  );
}