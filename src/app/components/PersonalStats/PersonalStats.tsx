import Reveal from "../UI/Reveal/Reveal";

const stats = [
  { value: "4", label: "Years of Experience" },
  { value: "20+", label: "Technologies" },
  { value: "3", label: "Companies Shipped At" },
];

const PersonalStats = () => {
  return (
    <Reveal className="rounded-2xl border border-white/10 bg-white/[0.02] transition-colors hover:border-primary/30">
      <div className="grid grid-cols-3 divide-x divide-white/10">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center text-center gap-1 py-6 px-2 md:py-8"
          >
            <span className="font-display text-3xl md:text-4xl font-semibold text-primary">
              {stat.value}
            </span>
            <span className="text-xs md:text-sm text-foreground-muted">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </Reveal>
  );
};

export default PersonalStats;
