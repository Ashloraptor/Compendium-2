import React, { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { ME, QUERY_USER } from '../utils/queries';
import Auth from '../utils/auth';

import {
  Grid,
  Paper,
} from '@mui/material';
import  PlantGarden from '../components/PlantGarden';

const styles = {
  headerContainer: {
    p: 5,
    m: 0  
  },
  pageStyle: {
    backgroundColor: 'green',
    minHeight: '100vh',
    width: '100vw',
    p:5
  },
};

const Profile = () => {


  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : ME, {
    variables: { username: userParam },
  });
  const user = data?.me || data?.user || {};

  

  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to='/ImageFinder' />;
  }

  if (!user?.username) {
    return (
      <h4>
        Sign in!
      </h4>
    );
  }

  return (
    <>
      <Grid sx={styles.pageStyle}>
      
          
 
        <Grid container>
        
          <Grid item xs={8}>
           
            <Paper sx={{ p: 0, mt: 5, borderRadius: '0px' }}>
              <PlantGarden plants={user.plants} ></PlantGarden>
            </Paper>
            
          </Grid> 
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;
