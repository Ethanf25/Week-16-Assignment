// Import React and useState hook for managing component state
import React, { useState } from "react"; // Import necessary modules from React

// Import custom components used in the app
import Sidebar from "./Sidebar"; // Sidebar component for filters and visibility toggle
import TaskCard from "./TaskCard"; // TaskCard component for displaying tasks
import AddItem from "./AddItem"; // AddItem component for adding new tasks

// Import test data and Task type definition
import { testData } from "../data/testData"; // Sample data to initialize tasks
import type { Task } from "../data/testData"; // Type definition for a Task

// Define the App functional component
const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(testData); // State to hold the list of tasks
  const [sidebarVisible, setSidebarVisible] = useState<boolean>(true); // State to toggle sidebar visibility
  const [filterText, setFilterText] = useState<string>(""); // State to store filter text for searching tasks

  // Function to delete a task by its ID
  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id)); // Remove task from the list by filtering it out
  };

  // Function to toggle the completion status of a task
  const toggleCompletion = (id: number) => {
    setTasks(
      tasks.map((task) => // Map through the tasks to find the matching ID
        task.id === id ? { ...task, completed: !task.completed } : task // Toggle the 'completed' field
      )
    );
  };

  // Function to add a new task to the list
  const addItem = (item: string) => {
    const newTask = {
      id: tasks.length + 1, // Assign a unique ID based on list length
      name: item, // Set the task name
      completed: false, // New tasks start as incomplete
    };
    setTasks([...tasks, newTask]); // Add the new task to the task list
  };

  // Function to edit the name of a specific task
  const editTaskName = (id: number, newName: string) => {
    setTasks(
      tasks.map((task) => // Map through tasks to find the task to update
        task.id === id ? { ...task, name: newName } : task // Update the name if IDs match
      )
    );
  };

  // Function to toggle the sidebar's visibility
  const toggleSidebar = () => {
    setSidebarVisible((prev) => !prev); // Flip the boolean value of sidebarVisible
  };

  // Function to sort tasks alphabetically by name
  const sortTasks = () => {
    const sorted = [...tasks].sort((a, b) => a.name.localeCompare(b.name)); // Create a sorted copy of tasks
    setTasks(sorted); // Update the state with sorted tasks
  };

  // Filter the tasks based on the filterText input
  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(filterText.toLowerCase()) // Match task names ignoring case
  );

  // Render the component UI
  return (
    <div className={`app ${!sidebarVisible ? "sidebar-hidden" : ""}`}> {/* Apply class to hide sidebar if needed */}
      <Sidebar
        isVisible={sidebarVisible} // Pass sidebar visibility state
        toggleSidebar={toggleSidebar} // Pass function to toggle visibility
        filterText={filterText} // Pass current filter text
        onFilterChange={setFilterText} // Pass function to update filter text
      />

      <div className={`main-content ${!sidebarVisible ? "expanded" : ""}`}> {/* Expand content if sidebar is hidden */}
        <div className="item-card"> {/* Container for the main content */}
          <div className="content"> {/* Content section with heading and task controls */}
            <h1>Task List</h1> {/* Page title */}

            <AddItem addItem={addItem} /> {/* Render AddItem component with addItem function passed as prop */}

            <button
              onClick={sortTasks} // Run sortTasks when button is clicked
              className="sort-button" // Apply custom class
              style={{
                padding: "8px 12px", // Button padding
                marginTop: "10px", // Top margin
                marginBottom: "20px", // Bottom margin
                backgroundColor: "#4f46e5", // Indigo background color
                color: "white", // White text
                border: "none", // No border
                borderRadius: "6px", // Rounded corners
                cursor: "pointer", // Pointer cursor on hover
              }}
            >
              Sort Tasks {/* Button text */}
            </button>

            {/* Render TaskCard component with filtered tasks */}
            <TaskCard
              tasks={filteredTasks} // Pass filtered list of tasks
              onDelete={deleteTask} // Pass delete function
              onToggle={toggleCompletion} // Pass toggle function
              onEdit={editTaskName} // Pass edit function
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the App component as default
export default App; // Allow the App component to be imported elsewhere
