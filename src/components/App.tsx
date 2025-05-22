import React, { useState } from "react"; // Import React and the useState hook for managing component state
import Sidebar from "./Sidebar"; // Import the Sidebar component
import TaskCard from "./TaskCard"; // Import the TaskCard component
import { testData } from "../data/testData"; // Import the test data array from the data file
import type { Task } from "../data/testData"; // Import the Task type definition for TypeScript type checking
import AddItem from "./AddItem"; // Import the AddItem component

const App: React.FC = () => { // This line defines the main app component using React.FC
  const [tasks, setTasks] = useState<Task[]>(testData); // Declares the tasks state initialized with testData
  const [sidebarVisible, setSidebarVisible] = useState<boolean>(true); // Declare sidebarVisible state to control the visibility of the sidebar

  // Delete a task by filtering out the task with matching id
  const deleteTask = (id: number) => { // Define the function to delete a task by id
    setTasks(tasks.filter((task) => task.id !== id)); // this line updates the tasks state by filtering out the task with the given id
  };

  // Toggle completed state of a task
  const toggleCompletion = (id: number) => { // here I defined the function to toggle the completion status of a task
    setTasks( // and then used the setTasks function to update the tasks state
      tasks.map((task) => // and then I used the map function to loop through each task
        task.id === id ? { ...task, completed: !task.completed } : task // This line checks if the task id matches the given id, if it does,
        //  it toggles the completed status, otherwise, it returns the task unchanged
      )
    );
  };

  // Add a new task to the list
  const addItem = (item: string) => { // this line is used to define the function to add a new task
    const newTask = { // this is where I used const to create a new task object
      id: tasks.length + 1, // then generated a new id for the task based on the current length of the tasks array
      name: item, // and then set the name of the task to the item passed in
      completed: false, // which resulted in the completed status being set to false
    };
    setTasks([...tasks, newTask]); // then this line will update the tasks state by spreading the existing tasks
    //  and adding the new task to the end of the array
  };

  // Edit the name of an existing task
  const editTaskName = (id: number, newName: string) => { //Here I defined the function to edit the name of a task
    setTasks( // and then I used the setTasks function to update the tasks state
      tasks.map((task) => // which then used the map function to loop through each task
        task.id === id ? { ...task, name: newName } : task // so then if the task id matches the given id,
        //  it updates the name of the task to the new name passed in
      )
    );
  };

  // Toggle sidebar visibility by updating state
  const toggleSidebar = () => {
    setSidebarVisible((prev: boolean) => !prev);
  };

  return ( // Return the JSX layout of the component
    <div className={`\app ${!sidebarVisible ? "sidebar-hidden" : ""}`}> {/* Container that wraps both sidebar and main content, toggles sidebar-hidden class */}
      <Sidebar isVisible={sidebarVisible} toggleSidebar={toggleSidebar} /> {/* Render Sidebar component and pass props */}

      <div className={`main-content ${!sidebarVisible ? "expanded" : ""}`}> {/* Wrap main content in div and expand when sidebar is hidden */}
        <div className="item-card">
          <div className="content">
            <h1>To-Do List</h1>
            <AddItem addItem={addItem} />
            <TaskCard // This renders the TaskCard component
              tasks={tasks} // This will pass the current tasks array
              onDelete={deleteTask} // then pass the function to delete a task
              onToggle={toggleCompletion} // then pass the function to toggle the completion status
              onEdit={editTaskName} // and then pass the function to edit the task name
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App; // Export the App component to be used elsewhere in the app
