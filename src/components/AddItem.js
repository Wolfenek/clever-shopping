import React, { useState } from "react";
import { useActions } from "easy-peasy";

const AddItem = () => {
  // Local component state
  const [newItem, setNewItem] = useState({
    title: "",
    quantity: 1
  });
  
  // destructuring object imtems from the newItem local state
  const { title, quantity } = newItem;

  // Handle Change
  const handleChange = e => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const add = useActions(actions => actions.add);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          // using the "add" action to send the new Item to the model in easy-peasy
          add({
            title,
            quantity,
            completed: false
          });
          // clear input fields
          setNewItem({ ...newItem, title: "", quantity: 1 });
        }}
      >
        {/* Title */}
        <input
          type="text"
          value={title}
          name="title"
          placeholder="Add item..."
          onChange={e => handleChange(e)}
        />
        {/* Amount */}
        <input
          type="number"
          // min="1"
          value={quantity}
          name="quantity"
          placeholder="Amount..."
          onChange={e => handleChange(e)}
        />
        {/* Add item to list */}
        <input type="submit" value="Add item" />
      </form>
    </div>
  );
};

export default AddItem;
