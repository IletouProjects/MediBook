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
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF7900]"
      >
        <span className="h-3 w-3 rounded-full bg-white" />
      </span>

      <span
        className={`text-xl font-semibold tracking-[-0.03em] ${
          light ? "text-white" : "text-[#071E3D]"
        }`}
      >
        Medi<span className="text-[#FF7900]">Book</span>
      </span>
    </Link>
  );
}