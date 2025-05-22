import React from "react"; // I imported React to use JSX syntax and create components

interface SidebarProps {
  isVisible: boolean; // This is a prop that determines if the sidebar is visible or not using a boolean value (true or false)
  toggleSidebar: () => void; // This is a function prop that will be called to toggle the visibility of the sidebar
}

const Sidebar: React.FC<SidebarProps> = ({ isVisible, toggleSidebar }) => { // to define the Sidebar component, I used React.FC to type it as a functional component
  return (
    <>
      {/* Toggle sidebar button always shown at top-left corner, outside sidebar */}
      <button
        onClick={toggleSidebar}
        className="toggle-sidebar-btn"
        style={{
          position: "fixed",
          top: 20,
          left: isVisible ? 270 : 20, // If sidebar visible, push button right of sidebar; else near left edge
          zIndex: 1100,
          transition: "left 0.3s ease-in-out",
        }}
      >
        {isVisible ? "Hide Sidebar" : "Show Sidebar"} {/* Show appropriate button text */}
      </button>

      {/* Sidebar container with conditional transform for slide effect */}
      <div
        className="sidebar"
        style={{
          transform: isVisible ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        {/* Always render sidebar content to keep width and layout stable */}
        <h2 className="sidebar-header">Navigate</h2>
        <ul>
          <li><a href="#" className="sidebar-link">Home</a></li>
          <li><a href="#" className="sidebar-link">Tasks</a></li>
          <li><a href="#" className="sidebar-link">Settings</a></li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar; // Export Sidebar component
