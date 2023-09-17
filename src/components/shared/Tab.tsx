import { FC, MouseEvent, ReactNode } from "react";

export interface TabProps {
  id: string;
  text: string | ReactNode;
  active?: boolean;
  onChangeTab: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Tab: FC<TabProps> = ({ id, text, active, onChangeTab }) => {
  return (
    <button
      onClick={(id) => onChangeTab(id)}
      id={id}
      className={`cursor-pointer p-1 ml-3 ${
        active ? "bg-gray-800 rounded-lg text-cyan-300" : "text-slate-300"
      }`}
    >
      {text}
    </button>
  );
};

export default Tab;
