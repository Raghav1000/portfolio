import { ReactNode } from "react";

const AppContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-[1600px] mx-auto">
      {children}
    </div>
  );
};

export default AppContainer;
