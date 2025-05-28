import React, { useState } from "react"; // Import necessary modules from React

// Import custom components that are used in the app
import Sidebar from "./Sidebar"; // Sidebar component
import TaskCard from "./TaskCard"; // TaskCard component
import AddItem from "./AddItem"; // AddItem component

// Import test data and Task type definition
import { testData } from "../data/testData"; // Sample data / test data for tasks
import type { Task } from "../data/testData"; // Type definition 

// Below is whee I had to define the App functional component using React.FC (Function Component) type
const App: React.FC = () => { // So, I defined the App component as a functional component
  const [tasks, setTasks] = useState<Task[]>(testData); // and then I initialized the tasks state with test data, using the Task type for type safety
  const [sidebarVisible, setSidebarVisible] = useState<boolean>(true); // then I set the sidebar visibility state, defaulting to true (visible)
  const [filterText, setFilterText] = useState<string>(""); // lastly, I set the filter text state, which is used to filter tasks based on user input

  // The function to delete a task by its ID
  const deleteTask = (id: number) => { 
    setTasks(tasks.filter((task) => task.id !== id)); // then it updates the tasks state by filtering out the task with the matching ID
  };

  // My function to toggle the completion status of a task
  const toggleCompletion = (id: number) => { 
    setTasks(
      tasks.map((task) => // This will map (iterate) trough the tasks arrary
        task.id === id ? { ...task, completed: !task.completed } : task // and finally it will toggle the completed status of the task with the matching ID
      )
    );
  };

  // The function to add a new task to the list
  const addItem = (item: string) => { 
    const newTask = { //then it creates a new task object with the following properties
      id: tasks.length + 1, // first, it sets the ID to the next number in sequence based on the current tasks length
      name: item, // second, it sets the name to the item passed in
      completed: false, // then, it initializes the completed status to false
    };
    setTasks([...tasks, newTask]); // and then it updates the tasks state by adding the new task to the existing tasks array
  };

  // Below is the function to edit the name of a specific task
  const editTaskName = (id: number, newName: string) => { 
    setTasks(
      tasks.map((task) => // so, it maps through the tasks array
        task.id === id ? { ...task, name: newName } : task // and then it updates the name of the task with the matching ID to the new name
      )
    );
  };

  // My function to toggle the sidebar's visibility
  const toggleSidebar = () => { // toggleSidebar function to flip the sidebar visibility state
    setSidebarVisible((prev) => !prev); // This line flips the boolean value of "sidebarVisible" whenever the function is called
  };

  // My function to sort tasks alphabetically by name
  const sortTasks = () => { 
    const sorted = [...tasks].sort((a, b) => a.name.localeCompare(b.name)); // First it creates a sorted copy of tasks
    setTasks(sorted); // and then it updates the tasks state with the sorted array
  };

  // Filter the tasks
  const filteredTasks = tasks.filter((task) => // This filters the tasks based on the filter text
    task.name.toLowerCase().includes(filterText.toLowerCase()) // then, this checks if the task name includes the filter text, ignoring case
  );

  // Render the component UI
  return (
    <div className={`app ${!sidebarVisible ? "sidebar-hidden" : ""}`}> {}
      <Sidebar
        isVisible={sidebarVisible} // this prop controls the visibility of the sidebar
        toggleSidebar={toggleSidebar} // this prop is the function to toggle sidebar visibility
        filterText={filterText} // this prop holds the current filter text
        onFilterChange={setFilterText} // and then this prop is the callback function to update the filter text
      />

      <div className={`main-content ${!sidebarVisible ? "expanded" : ""}`}> {/* This will expand content if sidebar is hidden */}
        <div className="item-card"> {/* this is the container for the main content */}
          <div className="content"> {/* this is the content section */}
            <h1>Task List</h1> {/* The page title */}

            <AddItem addItem={addItem} /> {/* this will render the "AddItem" component with th "addItem" function passed as prop */}

            <button
              onClick={sortTasks} // Run sortTasks when clicked
              className="sort-button" // Apply custom class
              style={{
                padding: "8px 12px", 
                marginTop: "10px", 
                marginBottom: "20px",
                backgroundColor: "#4f46e5", 
                color: "white", 
                border: "none", 
                borderRadius: "6px", 
                cursor: "pointer", 
              }}
            >
              Sort Tasks {}
            </button>

            {/* Render the "TaskCard" component with filtered tasks */}
            <TaskCard
              tasks={filteredTasks} // this prop is the filtered tasks array
              onDelete={deleteTask} // then the delete function is passed as a prop
              onToggle={toggleCompletion} // followed by the toggle function to change completion status
              onEdit={editTaskName} // and then the edit function to change task names
            />
          </div>
        </div>
      </div>
    </div>
  );
};


export default App; // Allow the App component to be imported elsewhere
