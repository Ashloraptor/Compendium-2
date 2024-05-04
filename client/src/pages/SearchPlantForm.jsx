import React, { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { ME, QUERY_USER } from '../utils/queries';
import Auth from '../utils/auth';
import {
  Grid,
  Paper,
} from '@mui/material';
import PlantGarden from '../components/PlantGarden';
import PlantSearchForm from '../components/PlantSearchForm'; // Import the PlantSearchForm component

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
  const [filteredPlants, setFilteredPlants] = useState(user.plants); // State to hold filtered plants

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

  // Function to handle search
  const handleSearch = (searchQuery) => {
    const filtered = user.plants.filter((plant) =>
      plant.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPlants(filtered);
  };

  return (
    <>
      <Grid sx={styles.pageStyle}>
        <Grid container>
          <Grid item xs={8}>
            <Paper sx={{ p: 0, mt: 5, borderRadius: '0px' }}>
              {/* Integrate the PlantSearchForm component */}
              <PlantSearchForm onSearch={handleSearch} />
              {/* Render the PlantGarden component with filtered plants */}
              <PlantGarden plants={filteredPlants} />
            </Paper>
          </Grid> 
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;
