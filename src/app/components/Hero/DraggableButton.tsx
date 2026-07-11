const DraggableButton = () => {
  return (
    <div className="inline-flex items-center gap-2 py-1.5 px-4 text-xs sm:text-sm rounded-full border border-white/10 bg-white/[0.03] text-foreground-muted">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
      </span>
      Available for new opportunities
    </div>
  );
};

export default DraggableButton;
