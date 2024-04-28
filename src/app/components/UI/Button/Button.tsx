import { IButton } from "@/app/types/common";

const Button = ({ label, icon, size, onClick, type }: Partial<IButton>) => {
  const style = {
    text: "flex justify-center items-center group transition-all duration-300 hover:bg-appGrey-400 rounded-md px-2 py-1.5",
    primary:
      "justify-center items-center ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 bg-primary/80 hover:bg-primary focus-visible:outline-brand-600 shadow-sm text-xs  px-2 py-1 text-white lg:block",
  };

  return (
    <div>
      <button onClick={onClick} className={style[type ?? "text"]}>
        <div className="flex items-center gap-1.5 opacity-80 group-hover:opacity-100">
          {icon && icon}
          {label && label}
        </div>
      </button>
    </div>
  );
};

export default Button;
