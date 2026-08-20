import type { ReactNode } from "react";

type TermProps = {
  definition: string;
  children: ReactNode;
};

export function Term({ children, definition }: TermProps) {
  return (
    <span
      tabIndex={0}
      className="group relative inline-block cursor-help  font-semibold underline decoration-blue decoration-dashed decoration-2 underline-offset-4 focus-visible:outline-2 focus-visible:outline-blue"
    >
      {children}
      <span className="pointer-events-none absolute left-1/2 top-full z-20 w-65 -translate-x-1/2 border border-blue bg-white p-3 text-sm leading-snug text-black shadow-sm opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus:opacity-100">
        {definition}
      </span>
    </span>
  );
}