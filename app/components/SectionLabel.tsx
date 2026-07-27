type SectionLabelProps = {
  children: React.ReactNode;
  light?: boolean;
};

export default function SectionLabel({
  children,
  light = false,
}: SectionLabelProps) {
  return (
    <p
      className={`text-sm font-semibold uppercase tracking-[0.16em] ${
        light ? "text-orange-300" : "text-[#FF7900]"
      }`}
    >
      {children}
    </p>
  );
}