import { useState } from "react";
import titleCase from "../utils/titleCase";

function Tabs({ components, heading }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col  border">
      {heading && <h2 className="mx-auto max-w-fit py-5">{heading}</h2>}

      <div className=" flex  flex-1  pt-4">
        {components.map((_, i) => (
          <TabButton
            tab={i}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
            components={components}
            key={i}
          />
        ))}
      </div>

      <Tab activeTab={activeTab} components={components} />
    </div>
  );
}

function TabButton({ tab, setActiveTab, activeTab, components }) {
  const heading = components[tab][1];

  function handleClick() {
    setActiveTab(tab);
  }
  if (tab === activeTab)
    return (
      <button
        className=" flex-1 border-b-4 border-b-emerald-800 pb-4 text-lg tracking-wide "
        onClick={handleClick}
      >
        {heading.toUpperCase()}
      </button>
    );

  return (
    <button
      className="flex-1 border-b-4 border-b-stone-300 text-lg tracking-wide"
      onClick={handleClick}
    >
      {heading.toUpperCase()}
    </button>
  );
}

function Tab({ components, activeTab }) {
  return (
    <div className=" rounded-sm bg-stone-100 p-3">
      {components[activeTab][0]}
    </div>
  );
}

export default Tabs;
