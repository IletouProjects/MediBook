import Link from "next/link";

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="border-b border-orange-200 bg-orange-50">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-7 gap-y-3 px-5 py-4 text-sm lg:px-8">
          <p className="font-semibold text-[#071E3D]">Espace services</p>

          <Link
            href="/services"
            className="text-slate-600 hover:text-[#FF7900]"
          >
            Présentation
          </Link>

          <Link
            href="/contact"
            className="text-slate-600 hover:text-[#FF7900]"
          >
            Demander de l’aide
          </Link>
        </div>
      </div>

      {children}
    </>
  );
}