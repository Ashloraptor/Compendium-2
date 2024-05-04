import * as React from "react";
import { useState, useRef } from "react";

import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  CircularProgress,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import SaveIcon from "@mui/icons-material/Save";

import { green } from "@mui/material/colors";
import { searchPlants } from "../../utils/API";
import { useMutation } from "@apollo/client";
import { ME } from "../../utils/queries";
import { ADD_PLANT } from "../../utils/mutations";

export default function AddPlants({ open, handleClose }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const timer = React.useRef();
  



  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);
  



  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 6000);
    }
  };
  

  const plantFile = useRef();

  


  const [formState, setFormState] = useState({
    commonName: '',
    imagePath:'',
    scientificName: '',
   
  })
  

  const { commonName, imagePath, scientificName } = formState;
  
  const [plantImg, setPlantImg] = useState([]);
 


  const onFileChange = (event) => {
    setPlantImg(event.target.files);
  };
  


  const handleSearch = () => {
    const plantArr = Object.values(plantImg);
    searchPlants(plantArr).then((res) => {
      setFormState ({...formState, 
        commonName: res.suggestions[0].plant_details.common_names[0],
        scientificName: res.suggestions[0].plant_details.scientific_name,
        imagePath: res.suggestions[0].similar_images[0].url
      })

    });
    console.log(commonName);
    console.log(scientificName);
    console.log(imagePath);
  };

  
  const handleChange = event => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
};


  const [addPlant, { error }] = useMutation(ADD_PLANT, {
    refetchQueries: [{ query: ME }],
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await addPlant({
        variables: formState
        
      });
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <Dialog align="center" open={open} onClose={handleClose}>
        <DialogTitle>Add a New Plant</DialogTitle>

        <DialogContent>
          <div>
            <label>Upload an image to view plants</label>
            <input
              ref={plantFile}
              type="file"
            


              onChange={onFileChange}
              multiple
            />

            <DialogActions align="center">
              <Button
                variant="contained"
                onClick={() => {
                  handleSearch();
                  handleButtonClick();
                }}
              >
                {success ? <CheckIcon /> : <SaveIcon />}
                Check Plant type
              </Button>
              {loading && (
                <CircularProgress
                  size={68}
                  sx={{
                    color: green[600],
                    position: "absolute",
                    top: -8,
                    left: -8,
                    zIndex: 2,
                    marginTop: 9,
                    marginLeft: 4,
                  }}
                />
              )}
            </DialogActions>
          </div>
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Common Plant Name"
            type="text"
            name='commonName'
            
            
            fullWidth
            variant="standard"
            value={commonName || ""}
            onChange={handleChange}
          />
          
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Plant Image Path"
            name='imagePath'
            type="text"
            fullWidth
            variant="standard"
            value={imagePath}
            onChange={handleChange}
          />
         
         
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outlined" onClick={handleSubmit}>
            Add 
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
