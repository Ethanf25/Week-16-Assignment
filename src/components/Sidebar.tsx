// ==== Sidebar.tsx ====
import React from 'react'; // I imported React to use JSX syntax and create components

interface SidebarProps {
  isVisible: boolean; // This is a prop that determines if the sidebar is visible or not using a boolean value (true or false)
  toggleSidebar: () => void; // This is a function prop that will be called to toggle the visibility of the sidebar
}

const Sidebar: React.FC<SidebarProps> = ({ isVisible, toggleSidebar }) => { //to define the Sidebar component, I used React.FC to type it as a functional component
  return ( // so then I returned the JSX layout of the component
    <div> {}
      <button
        onClick={toggleSidebar} // then created a button and when clicked, it calls the toggleSidebar function passed from the parent component
        className={`toggle-sidebar-btn ${!isVisible ? 'top-left' : ''}`} // this line sets the class name for the button, adding 'top-left' if the sidebar is not visible
      >
        {isVisible ? 'Hide Sidebar' : 'Show Sidebar'}
      </button>
      {isVisible && ( // This line checks if the sidebar is visible, if true, it renders the sidebar content
        <div className="sidebar"> {/* Sidebar container */}
          <h2 className="sidebar-header">Navigate</h2> {/* Sidebar title/header */}
          <ul> {/* Unordered list for navigation links */}
            <li><a href="#" className="sidebar-link">Home</a></li> {/* Navigation link to Home */}
            <li><a href="#" className="sidebar-link">Tasks</a></li> {/* Navigation link to Tasks */}
            <li><a href="#" className="sidebar-link">Settings</a></li> {/* Navigation link to Settings */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar; // Export the Sidebar component so it can be imported and used in other files
