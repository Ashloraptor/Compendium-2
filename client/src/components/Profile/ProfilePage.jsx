import React from 'react';
import { useQuery } from '@apollo/client';
import { ME } from '../../utils/queries';
import PlantGarden from '../PlantGarden/index';
import './ProfilePage.css'

const ProfilePage = () => {
  const { loading, error, data } = useQuery(ME);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { username, email, plants } = data.me;

  return (
    <div className="profile">
      <h1>Your Compendium</h1>
      <div>
        <h2>Username: {username}</h2>
        {/* <p>Email: {email}</p> */}
      </div>
      {/* Render the PlantGarden component without passing the showAddButton prop */}
      <PlantGarden plants={plants} />
    </div>
  );
};

export default ProfilePage;