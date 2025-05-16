"use client";

import { useState, ReactNode } from "react";

interface Tab {
  id: string;
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultTabId?: string;
  className?: string;
}

export default function Tabs({
  tabs,
  defaultTabId,
  className = "",
}: TabsProps) {
  const [activeTabId, setActiveTabId] = useState(defaultTabId || tabs[0]?.id);

  // Find the active tab
  const activeTab = tabs.find((tab) => tab.id === activeTabId) || tabs[0];

  return (
    <div className={className}>
      {/* Tab Headers */}
      <div
        className="flex justify-between border-b border-gray-200 mb-6"
        role="tablist"
        aria-orientation="horizontal"
      >
        {tabs.map((tab) => {
          const isActive = tab.id === activeTabId;
          const tabId = `tab-${tab.id}`;
          const panelId = `panel-${tab.id}`;

          return (
            <button
              key={tab.id}
              id={tabId}
              className={`
                py-2 px-4 text-base md:text-lg font-medium transition-colors relative
                ${
                  isActive
                    ? "text-black font-medium"
                    : "text-gray-500 hover:text-gray-800"
                }
              `}
              onClick={() => setActiveTabId(tab.id)}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={panelId}
              tabIndex={isActive ? 0 : -1}
            >
              {tab.label}

              {/* Active indicator line */}
              {isActive && (
                <span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-black"
                  aria-hidden="true"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div
        id={`panel-${activeTab.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab.id}`}
        tabIndex={0}
        className="py-2 min-h-[100px]"
      >
        {activeTab.content}
      </div>
    </div>
  );
}
