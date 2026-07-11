import { ReactNode } from "react";

interface ISectionHeading {
  id?: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
}

const SectionHeading = ({ id, eyebrow, children, className }: ISectionHeading) => {
  return (
    <div id={id} className={`mb-8 ${className ?? ""}`}>
      {eyebrow && (
        <span className="text-primary text-xs font-medium uppercase tracking-[0.2em]">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-foreground">
        {children}
      </h2>
      <div className="mt-3 h-px w-16 bg-gradient-to-r from-primary to-transparent" />
    </div>
  );
};

export default SectionHeading;
