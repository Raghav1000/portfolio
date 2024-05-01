import { IButton } from "@/app/types/common";

const Button = ({ label, icon, size, onClick, type, className }: Partial<IButton>) => {
  const style = {
    text: "flex justify-center items-center group transition-all duration-300 hover:bg-appGrey-400 rounded-md px-3 py-1.5",
    primary:
      "justify-center items-center ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 bg-primary/80 hover:bg-primary focus-visible:outline-brand-600 shadow-sm px-3 py-1 text-white lg:block",
    default:
      "flex justify-center items-center group transition-all duration-300 hover:bg-appGrey-400 rounded-md px-3 py-1 border border-foreground/20",
  };

  const sizeStyle = {
    sm: "",
    md: "",
    lg: "px-3.5 py-2",
  };

  const classStyle = style[type ?? "text"] + " " + sizeStyle[size ?? "sm"];
  return (
    <div>
      <button onClick={onClick} className={`${classStyle} ${className}`}>
        <div className="flex items-center justify-center gap-1.5 opacity-80 group-hover:opacity-100">
          {icon && icon}
          {label && label}
        </div>
      </button>
    </div>
  );
};

export default Button;
