"use client";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string;
  variant: "default" | "warning";
  width?: "full" | number;
  height?: "full" | number;
  className?: string;
}

const applyVariant = (variant: Props["variant"]) => {
  let styles;

  switch (variant) {
    case "warning":
      styles = `bg-red-500 text-white`;
      break;

    default:
      styles = `bg-black text-white hover:bg-neutral-700`;
      break;
  }

  return styles;
};

const Button = ({
  text,
  variant,
  width,
  height,
  className,
  ...props
}: Props) => {
  const style = applyVariant(variant);

  return (
    <button
      className={`font-medium transition-colors ${style} ${
        className ? className : ""
      }`}
      style={{
        width: width === "full" ? "100%" : width,
        height: height === "full" ? "100%" : height,
      }}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
