
import React, { useState } from "react"; // Import React and useState hook
import { Task } from "../data/testData"; // Import Task type

interface TaskCardProps {
  tasks: Task[]; // List of tasks to display
  onDelete: (id: number) => void; // Function to delete a task by id
  onToggle: (id: number) => void; // Function to toggle task completion by id
  onEdit: (id: number, newName: string) => void; // Function to edit task name by id
}

const TaskCard: React.FC<TaskCardProps> = ({ tasks, onDelete, onToggle, onEdit }) => {
  const [editingId, setEditingId] = useState<number | null>(null); // Holds id of task being edited or null
  const [editText, setEditText] = useState(""); // Holds current text of the task being edited

  const startEditing = (task: Task) => {
    setEditingId(task.id); // Set editingId to the clicked task id
    setEditText(task.name); // Set editText to current task name
  };

  const saveEdit = (id: number) => {
    if (editText.trim()) {
      onEdit(id, editText.trim()); // Call onEdit prop with new trimmed name
      setEditingId(null); // Exit editing mode
    }
  };

  const cancelEdit = () => {
    setEditingId(null); // Exit editing mode without saving changes
  };

  return (
    <div>
      {tasks.map((task) => (
        <div className="item-card" key={task.id}>
          {editingId === task.id ? (  // If this task is being edited
            <>
              <input
                value={editText} // Input value is current editText state
                onChange={(e) => setEditText(e.target.value)} // Update editText on typing
                onKeyDown={(e) => { // Handle Enter and Escape keys
                  if (e.key === "Enter") saveEdit(task.id); // Save edit on Enter
                  if (e.key === "Escape") cancelEdit(); // Cancel edit on Escape
                }}
                autoFocus // Focus input automatically when editing starts
              />
              <button onClick={() => saveEdit(task.id)}>Save</button> {/* Save button */}
              <button onClick={cancelEdit}>Cancel</button> {/* Cancel button */}
            </>
          ) : (  // If not editing, show task name with controls
            <>
              <span
                onClick={() => onToggle(task.id)} // Toggle completion on click
                style={{ textDecoration: task.completed ? "line-through" : "none" }} // Strike-through if completed
              >
                {task.name} {/* Display task name */}
              </span>
              <button onClick={() => startEditing(task)}>Edit</button> {/* Edit button */}
              <button onClick={() => onDelete(task.id)}>Delete</button> {/* Delete button */}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskCard; // Export the TaskCard component