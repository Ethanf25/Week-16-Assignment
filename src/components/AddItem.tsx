import React, { useState } from 'react'; // Import React and the useState hook from the React library

interface AddItemProps {
  addItem: (item: string) => void; // Define a prop called addItem which is a function that takes a string and returns "void"
} 

const AddItem: React.FC<AddItemProps> = ({ addItem }) => { // This line defines a functional component with props typed using "A"ddItemProps"
  
  const [newItem, setNewItem] = useState<string>(''); // This is used to declare a state variable "newItem" with initial value as an empty string

  const handleAddClick = () => { // This defines a function to handle clicking the "Add Task" button
    if (newItem.trim()) { // this line checks if "newItem" is not just empty or whitespace
      addItem(newItem); // Then it calls the "addItem" function passed from the parent component with "newItem" as an argument
      setNewItem(''); // This line clears the input field by resetting "newItem" to an empty string
    }
  };

  return ( // This is the return function that is going to return the JSX that describes the component’s UI, this includes a, container div with a class name for styling, an input field
    // for the user to type in a new task, and a button to add the task
    <div className="add-item">
      <input
        type="text" 
        value={newItem} 
        onChange={(e) => setNewItem(e.target.value)} 
        placeholder="Add a new task" 
      /> 
      <button onClick={handleAddClick}>Add Task</button> 
    </div> // This is the button that calls the "handleAddClick" function when clicked
  ); 
};

export default AddItem; //This exports the AddItem component for use in other parts of the application
