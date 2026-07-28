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
    <section className="border-b border-[#E9E9E9] bg-[#FAFAF8] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionLabel>{label}</SectionLabel>

        <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#111111] sm:text-5xl">
          {title}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#626262]">
          {description}
        </p>
      </div>
    </section>
  );
}