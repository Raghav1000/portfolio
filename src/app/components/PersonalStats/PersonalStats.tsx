const stats = [
  { value: "4", label: "Years of Experience" },
  { value: "20+", label: "Technologies" },
  { value: "3", label: "Companies Shipped At" },
];

const PersonalStats = () => {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] transition-colors hover:border-primary/30">
      <div className="grid grid-cols-3 divide-x divide-white/10">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center text-center gap-1 py-6 px-2 md:py-8"
          >
            <span className="text-2xl md:text-3xl font-semibold text-primary">
              {stat.value}
            </span>
            <span className="text-xs md:text-sm text-foreground-muted">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalStats;
