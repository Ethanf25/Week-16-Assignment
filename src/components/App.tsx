import React, { useState } from "react"; // Import React and useState hook
import Sidebar from "./Sidebar"; // Import Sidebar component
import TaskCard from "./TaskCard"; // Import TaskCard component
import { testData } from "../data/testData"; // Import test data
import type { Task } from "../data/testData"; // Import Task type
import AddItem from "./AddItem"; // Import AddItem component

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(testData); // Initialize tasks state with test data

  // Delete a task by filtering out the task with matching id
  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task: Task) => task.id !== id));
  };

  // Toggle completed state of a task
  const toggleCompletion = (id: number) => {
    setTasks(
      tasks.map((task: Task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Add a new task to the list
  const addItem = (item: string) => {
    const newTask = {
      id: tasks.length + 1, // New id based on tasks length
      name: item, // Name from input
      completed: false, // Default completed false
    };
    setTasks([...tasks, newTask]); // Add new task to state array
  };

  // Edit the name of an existing task
  const editTaskName = (id: number, newName: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, name: newName } : task // Update task name if id matches
      )
    );
  };

  return (
    <div className="app">
      <Sidebar /> {/* Sidebar navigation */}
      <div className="main-content">
        <div className="item-card">
          <div className="content">
            <h1>To-Do List</h1> {/* Title */}
            <AddItem addItem={addItem} /> {/* AddItem component to add tasks */}
            <TaskCard
              tasks={tasks} // Pass tasks array
              onDelete={deleteTask} // Pass delete handler
              onToggle={toggleCompletion} // Pass toggle completion handler
              onEdit={editTaskName} // Pass edit handler here
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App; // Export App component
