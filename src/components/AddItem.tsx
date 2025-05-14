import React, { useState } from 'react'; // Import React and useState hook

interface AddItemProps {
  addItem: (item: string) => void; // Props expects a function addItem taking a string
} 

const AddItem: React.FC<AddItemProps> = ({ addItem }) => { // Functional component with AddItemProps
  
  const [newItem, setNewItem] = useState<string>(''); // State for input value

  const handleAddClick = () => { // Handles Add button click
    if (newItem.trim()) {
      addItem(newItem); // Calls addItem from parent
      setNewItem(''); // Clears input field
    }
  };

  return ( // Render JSX
    <div className="add-item"> 
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)} // Update input value on typing
        placeholder="Add a new task"
      /> 
      <button onClick={handleAddClick}>Add Task</button>
    </div> // Add Task button
  ); 
};

export default AddItem; // Export component for use elsewhere
