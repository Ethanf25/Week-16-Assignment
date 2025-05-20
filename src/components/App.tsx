import React, { useState } from "react";
import Sidebar from "./Sidebar";
import TaskCard from "./TaskCard";
import { testData } from "../data/testData";
import type { Task } from "../data/testData";
import AddItem from "./AddItem";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(testData);
  const [sidebarVisible, setSidebarVisible] = useState<boolean>(true);

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleCompletion = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const addItem = (item: string) => {
    const newTask = {
      id: tasks.length + 1,
      name: item,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const editTaskName = (id: number, newName: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, name: newName } : task
      )
    );
  };

  return (
    <div className="app-container" style={{ display: "flex" }}>
      <Sidebar
        isVisible={sidebarVisible}
        toggleSidebar={() => setSidebarVisible((prev) => !prev)}
      />
      <div className="main-content" style={{ flexGrow: 1, padding: "1rem" }}>
        <div className="item-card">
          <div className="content">
            <h1>To-Do List</h1>
            <AddItem addItem={addItem} />
            <TaskCard
              tasks={tasks}
              onDelete={deleteTask}
              onToggle={toggleCompletion}
              onEdit={editTaskName}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
