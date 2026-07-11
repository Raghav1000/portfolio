import { ReactNode } from "react";

const AppContainer = ({ children }: { children: ReactNode }) => {
  return <div className="min-h-screen flex flex-col">{children}</div>;
};

export default AppContainer;
