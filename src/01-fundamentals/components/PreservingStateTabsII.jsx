import { useState } from "react";
import { Likes } from "./Likes";

function PreservingStateTabsII() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col rounded-sm border   pt-3">
      <div className=" flex justify-center border-b-2  ">
        <TabButton tab={0} setActiveTab={setActiveTab} activeTab={activeTab} />
        <TabButton tab={1} setActiveTab={setActiveTab} activeTab={activeTab} />
      </div>
      <div className="bg-stone-100">
        {activeTab === 0 && (
          <Tab activeTab={activeTab}>
            <Likes />
          </Tab>
        )}

        {activeTab === 1 && (
          <Tab activeTab={activeTab}>
            <Likes />
          </Tab>
        )}
      </div>
    </div>
  );
}
function TabButton({ tab, setActiveTab, activeTab }) {
  function handleClick() {
    setActiveTab(tab);
  }
  if (tab === activeTab)
    return (
      <button
        className=" flex-1 border-b-4 border-b-emerald-600 pb-2 tracking-wide"
        onClick={handleClick}
      >
        <span className="text-5xl">{tab + 1}</span>
      </button>
    );

  return (
    <button className=" flex-1 pb-2  tracking-wide" onClick={handleClick}>
      <span className="text-5xl">{tab + 1}</span>
    </button>
  );
}

function Tab({ children, activeTab }) {
  return (
    <div className="mt-4 rounded-sm p-3">
      <p className="self-center font-bold">component {activeTab + 1}</p>
      {children}
    </div>
  );
}

export default PreservingStateTabsII;
