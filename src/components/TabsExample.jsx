import { useState } from "react";

export default function TabsExample() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="max-w-xl mx-auto mt-10">
      <div className="flex border-b border-gray-200">
        {["Tab 1", "Tab 2", "Tab 3"].map((tab, index) => (
          <button
            key={index}
            className={`py-2 px-4 ${
              activeTab === index
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="p-4 border">
        {activeTab === 0 && <p>Content for Tab 1</p>}
        {activeTab === 1 && <p>Content for Tab 2</p>}
        {activeTab === 2 && <p>Content for Tab 3</p>}
      </div>
    </div>
  );
}
