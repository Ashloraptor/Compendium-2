import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import PlantCard from "../components/PlantCard";

import { QUERY_PLANT } from "../utils/queries";


import Grid from '@mui/material/Grid';
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

const styles = {
  
    flexContainer: {
      display:'flex',
      flexDirection: 'column',
      justifyContent:'center'
    },  
    page: {
      backgroundColor: 'background.default',
      minHeight: '100vh'
    },
    historyContainer: {
      backgroundColor: '#f3f3f5',
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    },
    columnTitle: {
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'text.primary'
    }
  }
  
const Plant = () => {
  
  const { id: plantId } = useParams();
  console.log(plantId);
  

  const {  data } = useQuery(QUERY_PLANT, {
    variables: { id: plantId },
  });
  
  const plant = data?.plant || {};
  console.log(plant);
  
  

  return (
    <Box sx={styles.page}>
      <Grid container direction='column' alignItems={'center'}p={3}>
        <Grid item xs={12} my={3}>
          <Typography sx={styles.columnTitle} variant="h4">Plant Info</Typography>
        </Grid>
        <Grid item xs={12}> 
            <PlantCard plantInfo={plant} />
        </Grid>
       
      </Grid>
    </Box>
  );
};

export default Plant;
