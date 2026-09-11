export function Heading({
  children,
  className,
  as: Tag = "h1",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Tag
      className={`text-6xl lg:text-7xl 2xl:text-9xl font-display font-bold ${className}`}
    >
      {children}
    </Tag>
  );
}
