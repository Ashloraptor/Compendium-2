// import * as React from 'react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';
// import ListSubheader from '@mui/material/ListSubheader';
// import IconButton from '@mui/material/IconButton';
// import InfoIcon from '@mui/icons-material/Info';
// import Chip from '@mui/material/Chip';
// import AddIcon from '@mui/icons-material/Add';
// import AddPlants from '../AddPlants/AddPlants';
// import { Link } from 'react-router-dom';



// export default function PlantGarden({ plants, user }) {
  
//   console.log(plants);
  
//   const [open, setOpen] = React.useState(false);

//   // //button open/close
//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <ImageList>
//       <ImageListItem key='Subheader' cols={2}>
//         <ListSubheader sx={{ fontSize: '24px' }} component='div'>
//           Favorite plants!
//           <Chip
//             sx={{
//               fontSize: '14px',
//               width: 132,
//               height: 32,
//               cursor: 'pointer',
//               m: 2,
//               ':hover': {
//                 borderColor: 'darkgreen',
//               },
//             }}
//             icon={<AddIcon />}
//             onClick={handleClickOpen}
//             label='Add Plant'
//             variant='outlined'
//           />
//           <AddPlants open={open} handleClose={handleClose} />
//         </ListSubheader>
//       </ImageListItem>
//       {plants &&
//         plants.map((plant) => (
//           <ImageListItem key={plant._id}>
//             <img
//               src={`${plant.image_path}?w=248&fit=crop&auto=format`}
//               srcSet={`${plant.image_path}?w=248&fit=crop&auto=format&dpr=2 2x`}
//               alt={plant.image_path}
//               loading='lazy'
//             />
//             <ImageListItemBar
//               title={plant.common_name}
//               subtitle={plant.scientific_name}
//               actionIcon={
//                 <IconButton
//                   sx={{ color: 'green' }}
//                   aria-label={`info about ${plant.title}`}
//                   component={Link}
//                   to={`/plant/${plant._id}`}
//                 >
//                   <InfoIcon />
//                 </IconButton>
//               }
//             />
//           </ImageListItem>
//         ))}
//     </ImageList>
//   );
// }
import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import AddPlants from '../AddPlants/AddPlants';
import { Link } from 'react-router-dom';

export default function PlantGarden({ plants }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='container'>
      <ImageList>
        <ImageListItem key='Subheader' cols={2}>
          <ListSubheader sx={{ fontSize: '24px' }} component='div'>
            Favorite plants!
          </ListSubheader>
          <Button
            className="add-plant-button"
            startIcon={<AddIcon />}
            onClick={handleClickOpen}
            variant='outlined'
          >
            Add Plant
          </Button>
        </ImageListItem>
        {plants &&
          plants.map((plant) => (
            <ImageListItem key={plant._id}>
              <img
                src={`${plant.image_path}?w=248&fit=crop&auto=format`}
                srcSet={`${plant.image_path}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={plant.image_path}
                loading='lazy'
              />
              <ImageListItemBar
                title={plant.common_name}
                subtitle={plant.scientific_name}
                actionIcon={
                  <IconButton
                    sx={{ color: 'green' }}
                    aria-label={`info about ${plant.title}`}
                    component={Link}
                    to={`/plant/${plant._id}`}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
      </ImageList>
      <AddPlants open={open} handleClose={handleClose} />
    </div>
  );
}