import { action } from "easy-peasy";
import uuid from "uuid";

export default {
  items: [
    {
      id: uuid.v4(),
      title: "Cheese",
      quantity: 2,
      completed: false
    },
    {
      id: uuid.v4(),
      title: "Pizza",
      quantity: 4,
      completed: false
    },
    {
      id: uuid.v4(),
      title: "Water",
      quantity: 1,
      completed: false
    }
  ],
  /*****************
  Actions
  *****************/
  // Toggle item (completed or not)
  toggle: action((state, id) => {
    state.items.map(item => {
      if (item.id === id) {
        item.completed = !item.completed;
        item.checked = !item.checked;
      }
      return item;
    });
  }),
  // Add item
  add: action((state, item) => {
    item.id = uuid.v4();
    state.items = [...state.items, item];
  }),
  // Remove item
  remove: action((state, id) => {
    state.items = state.items.filter(item => item.id !== id);
  }),
  // Edit item
  edit: action((state, id) => {
    console.log(id);
  })
};
