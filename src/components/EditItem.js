import React, { useState } from "react";
import { useActions } from "easy-peasy";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
// Dialog
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const EditItem = ({ item }) => {
  // Use action from easy-peasy
  const { edit } = useActions(actions => actions.edit);
  // state and functions opening/closing dialog
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // display info about current item in the dialog
  const [editedItem, setEditedItem] = useState({
    editTitle: item.title,
    editQuantity: item.quantity
  });
  // Destructure the values above
  const { editTitle, editQuantity } = editedItem;

  // Handle Change
  const handleChange = e => {
    setEditedItem({ ...editedItem, [e.target.name]: e.target.value });
  };

  return (
    <>
      <IconButton onClick={handleClickOpen}>
        <EditIcon />
      </IconButton>
      {/* Dialog starts */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Edit Item Information"}
        </DialogTitle>
        <DialogContent>
          <div id="alert-dialog-description">
            <form
              onSubmit={e => {
                e.preventDefault();
              }}
            >
              {/* Title */}
              <input
                type="text"
                value={editTitle}
                name="editTitle"
                onChange={e => handleChange(e)}
              />
              {/* Amount */}
              <input
                type="number"
                value={editQuantity}
                name="editQuantity"
                onChange={e => handleChange(e)}
              />
              {/* Add item to list */}
              {/* <button onClick={() => edit(item.id)} value="Add item" /> */}
            </form>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EditItem;
