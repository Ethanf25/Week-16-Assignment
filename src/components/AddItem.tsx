import React, { useState } from "react"; // Import React and the useState hook

// Define the props interface with addItem function prop
interface AddItemProps {
  addItem: (item: string) => void; // addItem is a function that takes a string and returns nothing (void)
}

// Functional component typed with AddItemProps
const AddItem: React.FC<AddItemProps> = ({ addItem }) => { // Define the AddItem component and destructure the addItem prop
  const [inputValue, setInputValue] = useState(""); // Declare state to keep track of the input value, initialized as an empty string

  const handleAddClick = () => { // Define the function to run when the button is clicked
    if (inputValue.trim()) { // Only proceed if the input is not just whitespace
      addItem(inputValue); // Call the addItem function passed via props with the current input value
      setInputValue(""); // Clear the input field after adding the task
    }
  };

  return ( // JSX that defines the component's UI
    <div className="add-item"> {/* Container for input and button */}
      <input
        type="text" // Set the input type to text
        value={inputValue} // Bind the input field to the state value
        onChange={(e) => setInputValue(e.target.value)} // Update state when user types in the input
        placeholder="Add a new task" // Placeholder text shown when input is empty
      />
      <button onClick={handleAddClick}>Add Task</button> {/* Button that triggers handleAddClick when clicked */}
    </div>
  );
};

export default AddItem; // Export the component so it can be used in other files
