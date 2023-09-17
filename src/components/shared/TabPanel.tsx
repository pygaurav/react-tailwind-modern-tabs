import { FC, ReactNode } from "react";

const TabPanel: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="p-[5px]">{children}</div>;
};

export default TabPanel;
