import Link from "next/link";
import Logo from "./Logo";

const navigation = [
  {
    label: "Accueil",
    href: "/",
  },
  {
    label: "À propos",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
        <Logo />

        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-8 md:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 hover:text-[#071E3D]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-lg bg-[#FF7900] px-5 py-3 text-sm font-semibold text-white hover:bg-[#E86E00] focus-visible:ring-4 focus-visible:ring-orange-100"
        >
          Prendre rendez-vous
        </Link>
      </div>

      <nav
        aria-label="Navigation mobile"
        className="flex items-center justify-center gap-5 overflow-x-auto border-t border-slate-100 px-5 py-3 md:hidden"
      >
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="whitespace-nowrap text-sm font-medium text-slate-600 hover:text-[#FF7900]"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}