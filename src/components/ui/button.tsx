const VARIANTS = {
  primary: "bg-black text-white shadow-[4px_4px_0_0_blue] ",
  seccondary:
    "bg-white text-black border-black border shadow-[4px_4px_0_0_black] ",
};

type ButtonProps = {
  variant: keyof typeof VARIANTS;
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  className: additionalClassName,
  ...props
}) => {
  const className = `inline-flex items-center justify-center px-6 py-3 font-bold cursor-pointer transition-all duration-150  active:translate-x-1 active:translate-y-1 active:shadow-none ${VARIANTS[variant]} ${additionalClassName || ""}`;
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};
