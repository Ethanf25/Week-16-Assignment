import React, { useState } from "react"; // Import React and useState hook for state management
import { Task } from "../data/testData"; // Import Task type definition from external data file

// Define props interface for SortTasks component
interface SortTasksProps {
  tasks: Task[]; // Array of Task objects to be sorted
  onSort: (sortedTasks: Task[]) => void; // Callback to send sorted task array back to parent
}

// Functional component SortTasks typed with React.FC and SortTasksProps interface
const SortTasks: React.FC<SortTasksProps> = ({ tasks, onSort }) => {
  const [currentTasks, setTasks] = useState<Task[]>(tasks); // Local state to hold tasks, initialized from props

  // Function to sort tasks alphabetically by the task name
  const sortTasksAlphabetical = () => {
    const sorted = [...currentTasks].sort((a, b) => a.name.localeCompare(b.name)); // Create new sorted array by comparing task names
    setTasks(sorted); // Update local state with sorted tasks
    onSort(sorted); // Notify parent component with sorted tasks
  };

  // Function to sort tasks numerically by the task id
  const sortTasksNumerical = () => {
    const sorted = [...currentTasks].sort((a, b) => a.id - b.id); // Create new sorted array by comparing task ids
    setTasks(sorted); // Update local state with sorted tasks
    onSort(sorted); // Notify parent component with sorted tasks
  };

  return (
    <div>
      {}
      <button
        onClick={sortTasksAlphabetical} 
        className="sort-button add-task-button" 
      >
        Sort Tasks Alphabetically {}
      </button>

      {}
      <button
        onClick={sortTasksNumerical} 
        className="sort-button add-task-button" 
      >
        Sort Tasks Numerically {}
      </button>
    </div> // these are the functions to sort tasks alphabetically and numerically
  );
};

export default SortTasks; // Export SortTasks
