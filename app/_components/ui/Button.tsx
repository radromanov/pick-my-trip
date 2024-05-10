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
      styles = `border border-neutral-300 drop-shadow-md hover:bg-slate-300/25`;
      break;

    case "warning":
      styles = `bg-red-500 text-white`;
      break;
    default:
      styles = `bg-black text-white hover:bg-neutral-700 drop-shadow-md outline outline-gray-300 -outline-offset-1`;
      break;
  }

  return styles;
};

const Button = ({
  variant,
  width,
  height,
  className,
  children,
  ...props
}: Props) => {
  const style = applyVariant(variant);

  return (
    <button
      className={`font font-medium transition-colors rounded-md ${style} ${
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
