"use client";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant: "default" | "warning" | "secondary";
  width?: "full" | number;
  height?: "full" | number;
  className?: string;
  children: React.ReactNode;
}

const applyVariant = (variant: Props["variant"]) => {
  let styles;

  switch (variant) {
    case "secondary":
      styles = `bg-white border-slate-300 hover:bg-slate-100 focus:bg-slate-100`;
      break;

    case "warning":
      styles = `bg-red-500 text-white`;
      break;
    default:
      styles = `bg-black text-white hover:bg-neutral-700 focus:bg-neutral-700`;
      break;
  }

  return styles;
};

const Button = ({
  variant,
  width = "full",
  height = "full",
  className,
  children,
  ...props
}: Props) => {
  const style = applyVariant(variant);

  return (
    <button
      className={`px-2 py-1 font-medium border transition-colors rounded-md drop-shadow-md ${style} ${
        className ? className : ""
      }`}
      style={{
        width: width === "full" ? "100%" : width,
        height: height === "full" ? "100%" : height,
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
