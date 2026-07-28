import Link from "next/link";
import Logo from "./Logo";


const footerLinks = [
  {
    label: "À propos",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Articles",
    href: "/blog",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="sticky bottom-0 z-40 border-t border-white/10 bg-[#111111] text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-5 sm:flex-row lg:px-8">
        <div className="flex items-center gap-5">
          <Logo light />

          <p className="hidden text-sm text-[#A8A8A8] lg:block">
            La prise de rendez-vous médical, simplement.
          </p>
        </div>

        <nav
          aria-label="Navigation du pied de page"
          className="flex items-center gap-5"
        >
          {footerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[#B8B8B8] hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <p className="text-center text-xs text-[#8D8D8D] sm:text-right">
          © {currentYear} MediBook
        </p>
      </div>
    </footer>
  );
}