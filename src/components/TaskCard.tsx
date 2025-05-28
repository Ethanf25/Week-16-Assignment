

import React, { useState } from "react"; // Import React
import { Task } from "../data/testData"; // Import the Task type definition from testData

interface TaskCardProps {
  tasks: Task[]; // this is a prop that takes an array of Task objects
  onDelete: (id: number) => void; // this is a prop that takes a function to delete a task by its id
  onToggle: (id: number) => void; // this is a prop that takes a function to toggle the completion status of a task by its id
  onEdit: (id: number, newName: string) => void; // this is a prop that takes a function to edit the name of a task by its id
}

const TaskCard: React.FC<TaskCardProps> = ({ tasks, onDelete, onToggle, onEdit }) => { // I then used the "TaskCardProps" interface to type the props of the TaskCard component
  const [editingId, setEditingId] = useState<number | null>(null); // then used "useState" to create a state variable called "editingId" to keep track of which task is being edited
  const [editText, setEditText] = useState(""); // then used "state" to store the text for editing a task
{}


  const startEditing = (task: Task) => { // this is the function to start editing a task
    setEditingId(task.id); // then I set the "editingId" to the id of the task being edited
    setEditText(task.name); // and then pre-fill the "editText" with the current task name
  };

  const saveEdit = (id: number) => { // this is the next function to save the edited task
    if (editText.trim()) { // this line will only save if the "editText" is not empty
      onEdit(id, editText.trim()); // then it will call the "onEdit" function passed from the parent component with the task id and the new name
      setEditingId(null); // and this exits editing mode
    }
  };

  const cancelEdit = () => { // Cancel the editing function
    setEditingId(null); // and this exits editing mode
  };

    return ( // Start JSX to render the task cards
    <div> {}
      {tasks.map((task) => ( //This line loops through each task in the tasks array and renders a card for each one
        <div className="item-card" key={task.id}> {}
          {editingId === task.id ? ( // this will then check if the current task is being edited
            <> {}
              <input
                value={editText} // This sets the value of the input to the "editText" state
                onChange={(e) => setEditText(e.target.value)} // and then updates the "editText" state when the input changes
                onKeyDown={(e) => { // which then listens for key presses
                  if (e.key === "Enter") saveEdit(task.id); // so, if the Enter key is pressed, it saves the edit
                  if (e.key === "Escape") cancelEdit(); // and if the Escape key is pressed, it cancels the edit
                }}
                autoFocus // this will automatically focus the input field when editing starts
              />
              <button onClick={() => saveEdit(task.id)}>Save</button> {/* Save button */}
              <button onClick={cancelEdit}>Cancel</button> {/* Cancel button */}
            </>
          ) : ( 
            <> {}
              <label> {}
              <input
                type="checkbox" //So this is the the check for when the task is completed
                  checked={task.completed} // this sets the checkbox to "checked" if the task is completed
                  onChange={() => onToggle(task.id)} // When changed, it calls the "onToggle" function to toggle the task's completion status
                />
                <span style={{ marginLeft: "8px" }}>{task.name}</span> {/* Display the name of the task with some spacing */}
              </label>
              <button onClick={() => startEditing(task)}>Edit</button> {/* Button to start editing this task */}
              <button onClick={() => onDelete(task.id)}>Delete</button> {/* Button to delete this task */}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskCard; // Export the TaskCard component
