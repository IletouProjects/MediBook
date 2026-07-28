type SectionLabelProps = {
  children: React.ReactNode;
};

export default function SectionLabel({
  children,
}: SectionLabelProps) {
  return (
    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#FF6B1A]">
      {children}
    </p>
  );
}