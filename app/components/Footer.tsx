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
    <footer className="border-t border-white/10 bg-[#111111] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-6 sm:px-5 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="text-base font-semibold sm:text-lg">
            Medi<span className="text-[#FF6B1A]">Book</span>
          </p>

          <p className="mt-1 text-xs leading-5 text-[#A8A8A8] sm:text-sm">
            La prise de rendez-vous médical, simplement.
          </p>
        </div>

        <nav
          aria-label="Navigation du pied de page"
          className="flex flex-wrap gap-x-4 gap-y-2"
        >
          {footerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs text-[#B8B8B8] transition hover:text-white sm:text-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <p className="text-xs text-[#8D8D8D]">
          © {currentYear} MediBook
        </p>
      </div>
    </footer>
  );
}