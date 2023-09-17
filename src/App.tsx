import { useState } from "react";
import "./App.css";
import Tab from "./components/shared/Tab";
import { tabsInfo } from "./utils/tabs.enums";
import TabPanel from "./components/shared/TabPanel";

function App() {
  const [selectedTab, setSelectedTab] = useState("tab-0");
  const handleChangeTab = (id: string) => {
    setSelectedTab(id);
  };
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="border border-gray-700 shadow-2xl shadow-gray-600 p-10 bg-gradient-to-tr from-black from-10% via-slate-950 via-60% to-slate-900 to-90% rounded-3xl">
        {tabsInfo.map(({ id, text }) => (
          <Tab
            onChangeTab={() => handleChangeTab(id)}
            id={id}
            key={id}
            text={text}
            active={selectedTab === id}
          />
        ))}
        <hr className="h-px mb-8 mt-2 bg-cyan-900 border-0"></hr>
        {tabsInfo.map(({ id, content }) => (
          <div
            className={` ${
              selectedTab === id ? "opacity-100" : "opacity-0"
            } transition-all ease-in-out delay-100 duration-300`}
          >
            {selectedTab === id && (
              <TabPanel key={`${id}-content`}>{content}</TabPanel>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
