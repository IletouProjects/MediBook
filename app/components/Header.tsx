"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
    label: "Articles",
    href: "/blog",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  const pathname = usePathname();

  function isActiveLink(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <>
      <div className="bg-[#FFF1E8] px-5 py-2.5 text-center text-xs font-medium text-[#C94D0A]">
        Organisez votre consultation en quelques étapes.
      </div>

      <header className="sticky top-0 z-50 border-b border-[#E9E9E9] bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
          <Logo />

          <nav
            aria-label="Navigation principale"
            className="hidden items-center gap-8 md:flex"
          >
            {navigation.map((item) => {
              const active = isActiveLink(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative flex items-center gap-2 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "text-[#111111]"
                      : "text-[#555555] hover:text-[#111111]"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`h-1.5 w-1.5 rounded-full bg-[#FF6B1A] transition-all ${
                      active
                        ? "scale-100 opacity-100"
                        : "scale-0 opacity-0"
                    }`}
                  />

                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className="rounded-full bg-[#111111] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(0,0,0,0.12)] hover:bg-[#2A2A2A]"
          >
            Prendre rendez-vous
          </Link>
        </div>

        <nav
          aria-label="Navigation mobile"
          className="flex items-center gap-6 overflow-x-auto border-t border-[#F0F0F0] px-5 py-3 md:hidden"
        >
          {navigation.map((item) => {
            const active = isActiveLink(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`flex shrink-0 items-center gap-2 whitespace-nowrap text-sm font-medium ${
                  active
                    ? "text-[#111111]"
                    : "text-[#666666] hover:text-[#FF6B1A]"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`h-1.5 w-1.5 rounded-full bg-[#FF6B1A] ${
                    active ? "opacity-100" : "opacity-0"
                  }`}
                />

                {item.label}
              </Link>
            );
          })}
        </nav>
      </header>
    </>
  );
}