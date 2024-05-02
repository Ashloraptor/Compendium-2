import * as React from "react";
import { useState } from "react";

import {
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
  } from "@mui/material";

  import { useMutation } from "@apollo/client";
  import { UPDATE_PLANT } from "../../utils/mutations";

const UpdatePlant = ({ open, handleClose, plantInfo }) => {
    


    const [formState, setFormState] = useState({
        plantId: plantInfo._id,
        commonName: plantInfo.common_name,
        imagePath: plantInfo.image_path,
        description: plantInfo.description,
       
    })


    const {  commonName , imagePath, description} = formState;

    const [updatePlant, { error }] = useMutation(UPDATE_PLANT);

    const handleChange = event => {
        setFormState({ ...formState, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      handleClose();
      try {
        const data = await updatePlant({
          variables: formState
        });
      } catch (e) {
        console.error(e);
      }
    };
  
    return (
      <div>
        <Dialog align="center" open={open} onClose={handleClose}>
          <DialogTitle>Update Plant Details!</DialogTitle>
  
          <DialogContent>
          <TextField
              autoFocus
              margin="dense"
              label="Common Plant Name"
              name="commonName"
              type="text"
              
              fullWidth
              variant="standard"
              value={commonName || ""}
              onChange={handleChange}
            />
             
            <TextField
              autoFocus
              margin="dense"
              label="Plant Description"
              name="description"
              type="text"
              fullWidth
              variant="standard"
              value={description || ""}
              onChange={handleChange}
            />
            <TextField
              autoFocus
              margin="dense"
              label="Plant Image Path"
              name="imagePath"
              type="text"
              fullWidth
              variant="standard"
              value={imagePath || ""}
              onChange={handleChange}
            />
    
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmit}>Plant Update</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  export default UpdatePlant;
  