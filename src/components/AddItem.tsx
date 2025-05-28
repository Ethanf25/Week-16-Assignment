import React, { useState } from "react"; // I had to Import React and the "useState" hook for this component

// Below is where I define the props interface with the "addItem" function prop
interface AddItemProps {
  addItem: (item: string) => void; // addItem is a function that takes a string and returns nothing (void)
}

// Then this is a functional component with the "AddItemProps" interface
const AddItem: React.FC<AddItemProps> = ({ addItem }) => { // First I defined the "AddItem" component and destructure the "addItem" prop
  const [inputValue, setInputValue] = useState(""); // Then I declared "state" to keep track of the input value, and then initialized it as an empty string

  const handleAddClick = () => { //The "handleAddClick" function is used to define the function to run when the button is clicked
    if (inputValue.trim()) { // Then it will only proceed if the input is not empty
      addItem(inputValue); // Then it will call the "addItem" function passed via props, with the current input value which is "inputValue"
      setInputValue(""); // Then it will clear the input field after adding the task
    }
  };

  return ( // This is the JSX that defines the component's UI
    <div className="add-item"> {/* This is the container for the input and the button */}
      <input
        type="text" // Here I set the input type to text
        value={inputValue} // then I bind the input value to the "inputValue" state
        onChange={(e) => setInputValue(e.target.value)} // and then I update the "inputValue" state whenever the input changes
        placeholder="Add a new task" // this is the placeholder text for the input field
      />
      <button onClick={handleAddClick}>Add Task</button> {/* This is the button that triggers "handleAddClick" when clicked */}
    </div>
  );
};

export default AddItem; // Export the component so it can be used in other files
