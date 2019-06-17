import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditItem from "./EditItem";
import Zoom from "@material-ui/core/Zoom";
import { useActions } from "easy-peasy";

const Item = ({ item }) => {
  const { toggle, remove } = useActions(actions => ({
    toggle: actions.toggle,
    remove: actions.remove
  }));

  return (
    <>
      <Zoom in={true} timeout={500}>
        <ListItem
          alignItems="center"
          dense
          divider
          // Display item information
          className={
            "single-item " + (item.completed && "single-item-completed")
          }
        >
          <ListItemIcon>
            <Checkbox
              color="primary"
              checked={item.completed}
              onClick={() => toggle(item.id)}
            />
          </ListItemIcon>
          <ListItemText
            primary={item.title}
            secondary={item.quantity}
            className={item.completed && "mark-completed"}
          />
          {/* Edit item component */}
          <EditItem item={item}/>
          {/* Remove item from list */}
          <IconButton onClick={() => remove(item.id)}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      </Zoom>
    </>
  );
};

export default Item;
