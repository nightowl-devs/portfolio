export function Heading({ children, className }: { children: React.ReactNode; className?: string }) {
  return <h1 className={`text-6xl lg:text-7xl 2xl:text-9xl font-display font-bold ${className}`}>{children}</h1>;
}
