import React from "react"; // Import React
import SidebarTaskFilter from "./SidebarTaskFilter"; // Import child component to filter tasks

// Below is where I define and export the "SidebarProps" interface, describing expected props for the "Sidebar" component
export interface SidebarProps {
  isVisible: boolean; // This controls if the sidebar is shown or hidden
  toggleSidebar: () => void; // my function to toggle sidebar visibility
  filterText: string; // filter text to filter tasks, which is passed from "App"
  onFilterChange: (value: string) => void; // then this is the callback function to update the filter text
}

// Below is the sidebar functional component
const Sidebar: React.FC<SidebarProps> = ({
  isVisible,
  toggleSidebar,
  filterText,
  onFilterChange,
}) => {
  return (
    <>
      {/* here I can render the toggle button outside of the sidebar only when the sidebar is hidden */}
      {!isVisible && (
        <button
          onClick={toggleSidebar} // this will toggle sidebar visibility on click
          className="toggle-sidebar-btn" // then apply custom class for styling
          style={{ // These are the inline style for the button
            position: "fixed",
            top: 20,
            left: 20,
            zIndex: 1100,
          }}
        >
          Show Sidebar {}
        </button>
      )}

      {}
      <div
        className="sidebar"
        style={{
          transform: isVisible ? "translateX(0)" : "translateX(-100%)", // Slide sidebar in or out of view using CSS tansform
          transition: "transform 0.3s ease-in-out", // This creates a smooth animation for a sliding effect
        }}
      >
        {}
        <div className="sidebar-content">
          <h2 className="sidebar-header">Navigate</h2> {/* Sidebar header title */} 

          <ul>
            {/* Sidebar navigation links */}
            <li><a href="#" className="sidebar-link">Home</a></li>
            <li><a href="#" className="sidebar-link">Tasks</a></li>
            <li><a href="#" className="sidebar-link">Help</a></li>
          </ul>

          {}
          <SidebarTaskFilter // This is the child component to filter tasks
            filterText={filterText} // here I pass the filter text from props
            onFilterChange={onFilterChange} // and then I pass the callback function to update the filter text
          />
        </div>

        {}
        {isVisible && ( //This will only render the collapse button when the sidebar is visible
          <button
            onClick={toggleSidebar} // this will collapse the sidebar on click 
            className="toggle-sidebar-btn" // custom styling
          >
            Collapse {}
          </button>
        )}
      </div>
    </>
  );
};

export default Sidebar; // Export Sidebar
