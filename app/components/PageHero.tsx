import SectionLabel from "./SectionLabel";


type PageHeroProps = {
  label: string;
  title: string;
  description: string;
};

export default function PageHero({
  label,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="bg-[#071E3D] py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionLabel light>{label}</SectionLabel>

        <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
          {title}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          {description}
        </p>
      </div>
    </section>
  );
}