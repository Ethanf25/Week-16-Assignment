import React from 'react';

interface SidebarProps {
  isVisible: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isVisible, toggleSidebar }) => {
  return (
    <div>
      <button onClick={toggleSidebar} className="toggle-sidebar-btn">
        {isVisible ? 'Hide Sidebar' : 'Show Sidebar'}
      </button>
      {isVisible && (
        <div className="sidebar">
          <h2 className="sidebar-header">Sidebar</h2>
          <ul>
            <li><a href="#" className="sidebar-link">Home</a></li>
            <li><a href="#" className="sidebar-link">Tasks</a></li>
            <li><a href="#" className="sidebar-link">Settings</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
