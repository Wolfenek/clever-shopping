import React, { useState } from "react";
import uuid from "uuid";

const FreshList = () => {
  const [item, newItem] = useState({
    smallItem: "",
    number: 1
  });

  // Main state, will be moved to Redux
  const [shoppingItems, setNewShoppingItem] = useState([
    {
      id: uuid.v4(),
      item: "Cheese",
      quantity: "2"
    }
  ]);

  // Destructuring
  const { id, smallItem, quantity } = shoppingItems;

  // Update the input fields
  const listenToChange = e => {
    newItem({ ...shoppingItems, [e.target.name]: e.target.value });
  };

  // Click button and add new item
  const newlyConstructedItem = e => {
    e.preventDefault();
    const hereWeGo = {
      id: uuid.v4(),
      smallItem: smallItem,
      quantity: quantity
    };
    newItem({ ...item, hereWeGo });
  };

  return (
    <>
      <form onSubmit={e => newlyConstructedItem(e)}>
        <input
          type="text"
          placeholder="I need to buy..."
          name="smallItem"
          value={smallItem}
          onChange={e => listenToChange(e)}
        />
        <input
          type="Number"
          placeholder="Quantity..."
          name="quantity"
          value={quantity}
          onChange={e => listenToChange(e)}
        />
        <button type="submit">OK</button>
      </form>
      {shoppingItems.map(({ id, item, quantity }) => (
        <>
          <h2>{item}</h2>
          <h3>{quantity}</h3>
        </>
      ))}
    </>
  );
};

export default FreshList;
