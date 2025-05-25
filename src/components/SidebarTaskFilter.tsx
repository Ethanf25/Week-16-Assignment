import React from "react"; // Import React library for JSX and component functionality

// Define props interface for SidebarTaskFilter component
interface SidebarTaskFilterProps {
  filterText: string; // Current text to filter tasks, received from parent component
  onFilterChange: (value: string) => void; // Callback to notify parent when filter text changes
}

// Functional component SidebarTaskFilter typed with React.FC and SidebarTaskFilterProps interface
const SidebarTaskFilter: React.FC<SidebarTaskFilterProps> = ({
  filterText, // Destructure filterText prop for controlled input value
  onFilterChange, // Destructure onFilterChange callback prop to handle input changes
}) => {
  return (
    <div>
      {/* Controlled input field for filtering tasks */}
      <input
        type="text" // Input type text for filtering
        value={filterText || ""} // Controlled value, fallback to empty string if undefined
        onChange={(e) => onFilterChange(e.target.value)} // Call onFilterChange with new input value on change
        placeholder="Filter tasks..." // Placeholder text shown when input is empty
      />
    </div>
  );
};

export default SidebarTaskFilter; // Export SidebarTaskFilter component as default export
