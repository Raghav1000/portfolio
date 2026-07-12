import { ReactNode } from "react";

interface ISectionHeading {
  id?: string;
  eyebrow?: string;
  index?: string;
  children: ReactNode;
  className?: string;
}

const SectionHeading = ({
  id,
  eyebrow,
  index,
  children,
  className,
}: ISectionHeading) => {
  return (
    <div id={id} className={`mb-10 ${className ?? ""}`}>
      <div className="flex items-center gap-3">
        {index && (
          <span className="font-display text-sm font-medium text-primary/70 tabular-nums">
            {index}
          </span>
        )}
        <span className="h-px w-8 bg-primary/40" />
        {eyebrow && (
          <span className="text-primary text-xs font-medium uppercase tracking-[0.2em]">
            {eyebrow}
          </span>
        )}
      </div>
      <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-tight text-foreground leading-[1.1]">
        {children}
      </h2>
    </div>
  );
};

export default SectionHeading;
