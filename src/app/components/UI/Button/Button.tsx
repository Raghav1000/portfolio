import { IButton } from "@/app/types/common";

const Button = ({
  label,
  icon,
  size,
  onClick,
  type,
  className,
  htmlType,
  disabled,
  ariaLabel,
}: Partial<IButton>) => {
  const style = {
    text: "hover:bg-appGrey-400 text-foreground/80 hover:text-foreground",
    primary:
      "bg-primary/90 hover:bg-primary text-black font-medium shadow-sm hover:shadow-md hover:shadow-primary/20",
    default:
      "border border-foreground/15 text-foreground/80 hover:text-foreground hover:bg-appGrey-400 hover:border-foreground/25",
  };

  const sizeStyle = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-2.5 text-sm",
  };

  const base =
    "inline-flex justify-center items-center gap-2 rounded-md outline-none transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary/70 disabled:opacity-60 disabled:pointer-events-none";

  const classStyle = `${base} ${style[type ?? "text"]} ${sizeStyle[size ?? "sm"]}`;

  return (
    <button
      type={htmlType ?? "button"}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel ?? (typeof label === "string" ? label : undefined)}
      className={`${classStyle} ${className ?? ""}`}
    >
      {icon}
      {label}
    </button>
  );
};

export default Button;
