import React, { useEffect, useState } from "react";

// Tabs component receives props 'tabs' and 'tabChange'
const Tabs = ({ tabs, tabChange }) => {
  // State variable to track the selected tab index
  const [selectedIndex, setSelectedIndex] = useState(0);

  // useEffect to trigger the tabChange callback when selectedIndex changes
  useEffect(() => {
    // Check if tabChange callback is provided
    if (tabChange) {
      // Call the tabChange callback with the updated selectedIndex
      tabChange(selectedIndex);
    }
  }, [selectedIndex, tabChange]);

  return (
    <div className="tabs">
      {/* Display a list of tabs */}
      <ul>
        {tabs.map((tab, idx) => (
          // List item for each tab with onClick event to update selectedIndex
          <li
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            // Apply "is-active" class if the tab is currently selected
            className={selectedIndex === idx ? "is-active" : ""}
          >
            <a>{tab}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
