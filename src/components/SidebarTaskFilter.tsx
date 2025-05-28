import React from "react"; // Import React

// Below I define props interface for the "SidebarTaskFilter" component
interface SidebarTaskFilterProps {
  filterText: string; // this is the current text to filter tasks, received from the parent component
  onFilterChange: (value: string) => void; // this is the callback function to update the filter text in the parent component
}

// This is the functional component for filtering tasks in the sidebar
const SidebarTaskFilter: React.FC<SidebarTaskFilterProps> = ({ // this will destructure props to get the following:
  filterText, // first, destructure "filterText" prop to control the input value
  onFilterChange, // thn destructure "onFilterChange" callback prop to handle input changes
}) => {
  return (
    <div>
      {}
      <input
        type="text" // Input type text for filtering
        value={filterText || ""} // this line sets the input value to the current filter text, or an empty string if it's undefined
        onChange={(e) => onFilterChange(e.target.value)} // then this will call the "onFilterChange" function with the new input value whenever the input changes
        placeholder="Filter tasks..." // this is just the placeholder text for the input field
      />
    </div>
  );
};

export default SidebarTaskFilter; // Export SidebarTaskFilter
