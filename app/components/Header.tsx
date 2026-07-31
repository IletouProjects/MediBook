"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const navigation = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Articles", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function isActiveLink(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#E9E9E9] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-5 lg:px-8">
        {/* Logo */}
        <Logo/>

        {/* Navigation desktop */}
        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-7 lg:flex"
        >
          {navigation.map((item) => {
            const active = isActiveLink(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-2 text-sm font-medium transition-colors ${
                  active
                    ? "text-[#111111]"
                    : "text-[#626262] hover:text-[#111111]"
                }`}
              >
                {item.label}

                <span
                  aria-hidden="true"
                  className={`absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#FF6B1A] transition-all ${
                    active
                      ? "scale-100 opacity-100"
                      : "scale-0 opacity-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full bg-[#111111] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2A2A2A] sm:inline-flex"
          >
            Prendre rendez-vous
          </Link>

          <Link
            href="/contact"
            aria-label="Prendre rendez-vous"
            className="inline-flex rounded-full bg-[#111111] px-3 py-2 text-[11px] font-semibold text-white transition hover:bg-[#2A2A2A] sm:hidden"
          >
            Rendez-vous
          </Link>

          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={
              isMenuOpen
                ? "Fermer le menu de navigation"
                : "Ouvrir le menu de navigation"
            }
            onClick={() => setIsMenuOpen((current) => !current)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E2E2E2] bg-white lg:hidden"
          >
            <span className="sr-only">
              {isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            </span>

            <span className="relative block h-4 w-4">
              <span
                className={`absolute left-0 top-0.5 h-0.5 w-4 rounded-full bg-[#111111] transition ${
                  isMenuOpen
                    ? "translate-y-[6px] rotate-45"
                    : ""
                }`}
              />

              <span
                className={`absolute left-0 top-[7px] h-0.5 w-4 rounded-full bg-[#111111] transition ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />

              <span
                className={`absolute bottom-0.5 left-0 h-0.5 w-4 rounded-full bg-[#111111] transition ${
                  isMenuOpen
                    ? "-translate-y-[6px] -rotate-45"
                    : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Navigation mobile */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-[#EFEFEF] bg-white transition-all duration-300 lg:hidden ${
          isMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <nav
          aria-label="Navigation mobile"
          className="mx-auto max-w-7xl px-4 py-4 sm:px-5"
        >
          <div className="grid gap-1">
            {navigation.map((item) => {
              const active = isActiveLink(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium ${
                    active
                      ? "bg-[#FFF1E8] text-[#111111]"
                      : "text-[#626262] hover:bg-[#FAFAF8] hover:text-[#111111]"
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
          </div>
        </nav>
      </div>
    </header>
  );
}