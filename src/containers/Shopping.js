import React from "react";
import Item from "../components/Item";
import AddItem from "../components/AddItem";
import List from "@material-ui/core/List";
import { useStore } from "easy-peasy";

function Shopping() {
  const items = useStore(state => state.items);

  let mainContent;
  // Check if there are items in the list
  if (items.length > 0) {
    mainContent = (
      <>
        <List>
          {items.map(item => (
            <Item key={item.id} item={item} />
          ))}
        </List>
      </>
    );
  } else {
    mainContent = (
      <>
        <h2>List empty, add some items to it</h2>
      </>
    );
  }

  return (
    <>
      <AddItem />
      {mainContent}
    </>
  );
}

export default Shopping;
