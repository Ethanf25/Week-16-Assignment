import React, { useState } from 'react'; // Import React and useState hook

const Sidebar: React.FC = () => {
  const [isSidebarVisible, setSidebarVisible] = useState<boolean>(true); // Track sidebar visibility

  const toggleSidebar = () => {
    setSidebarVisible((prevState) => !prevState); // Toggle sidebar visibility
  };

  return (
    <div>
      <button onClick={toggleSidebar} className="toggle-sidebar-btn"> {/* Toggle sidebar button */}
        {isSidebarVisible ? 'Hide Sidebar' : 'Show Sidebar'} {/* Button text changes */}
      </button>
      {isSidebarVisible && ( // Show sidebar only if visible
        <div className="sidebar">
          <h2 className="sidebar-header">Sidebar</h2> {/* Sidebar header */}
          <ul>
            <li><a href="#" className="sidebar-link">Home</a></li> {/* Link to Home */}
            <li><a href="#" className="sidebar-link">Tasks</a></li> {/* Link to Tasks */}
            <li><a href="#" className="sidebar-link">Settings</a></li> {/* Link to Settings */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar; // Export Sidebar component
