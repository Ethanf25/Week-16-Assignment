import React from "react"; // Import React for JSX and component creation
import SidebarTaskFilter from "./SidebarTaskFilter"; // Import child component for filtering tasks

// Define and export SidebarProps interface describing expected props for Sidebar component
export interface SidebarProps {
  isVisible: boolean; // Controls if sidebar is shown or hidden
  toggleSidebar: () => void; // Function to toggle sidebar visibility
  filterText: string; // Current filter text, passed from parent App
  onFilterChange: (value: string) => void; // Callback when filter text changes, passed from App
}

// Sidebar functional component typed with React.FC and SidebarProps interface
const Sidebar: React.FC<SidebarProps> = ({
  isVisible, // Destructure isVisible prop
  toggleSidebar, // Destructure toggleSidebar function prop
  filterText, // Destructure filterText prop
  onFilterChange, // Destructure onFilterChange callback prop
}) => {
  return (
    <>
      {/* Render toggle button outside sidebar only when sidebar is hidden */}
      {!isVisible && (
        <button
          onClick={toggleSidebar} // Toggle sidebar visibility on click
          className="toggle-sidebar-btn" // Apply toggle button styling
          style={{ // Inline styles to position button fixed at top-left corner above content
            position: "fixed",
            top: 20,
            left: 20,
            zIndex: 1100, // Ensure button overlays other elements
          }}
        >
          Show Sidebar {/* Button label */}
        </button>
      )}

      {/* Sidebar container, slides in/out with CSS transform */}
      <div
        className="sidebar" // Sidebar styling class
        style={{
          transform: isVisible ? "translateX(0)" : "translateX(-100%)", // Slide sidebar in or out of view
          transition: "transform 0.3s ease-in-out", // Smooth animation for sliding effect
        }}
      >
        {/* Main content area inside sidebar with scrollable content */}
        <div className="sidebar-content">
          <h2 className="sidebar-header">Navigate</h2> {/* Sidebar header title */}

          <ul>
            {/* Sidebar navigation links */}
            <li><a href="#" className="sidebar-link">Home</a></li>
            <li><a href="#" className="sidebar-link">Tasks</a></li>
            <li><a href="#" className="sidebar-link">Settings</a></li>
          </ul>

          {/* Render task filter component, passing filter text and change handler */}
          <SidebarTaskFilter
            filterText={filterText}
            onFilterChange={onFilterChange}
          />
        </div>

        {/* Render collapse button pinned at the bottom only when sidebar is visible */}
        {isVisible && (
          <button
            onClick={toggleSidebar} // Collapse sidebar on click
            className="toggle-sidebar-btn" // Reuse toggle button styling
          >
            Collapse {/* Button label */}
          </button>
        )}
      </div>
    </>
  );
};

export default Sidebar; // Export Sidebar as default export
