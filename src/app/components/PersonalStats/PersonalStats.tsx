const PersonalStats = () => {
  return (
    <div className="border border-green-200/50 rounded-md group hover:border-primary/30">
      <div className="grid grid-cols-3 p-3 md:p-5">
        <div className="flex flex-col text-center item-center border-r group-hover:border-r-primary/20">
          <h4 className="text-xl font-medium">3+</h4>
          <span className="font-thin text-sm md:text-base">
            Years of Experience
          </span>
        </div>
        <div className="flex flex-col text-center item-center border-r group-hover:border-r-primary/20">
          <h4 className="text-xl font-medium">20+</h4>
          <span className="font-thin text-sm md:text-base">
            Web Dev Technolgies
          </span>
        </div>
        <div className="flex flex-col text-center item-center">
          <h4 className="text-xl font-medium">120%</h4>
          <span className="font-thin text-sm md:text-base">
            Client Satisfaction
          </span>
        </div>
      </div>
    </div>
  );
};

export default PersonalStats;
