//saved plants will go here//
//this will use the queries and pull from the plantsearch card
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER_PROFILE } from '../../utils/queries';

const ProfilePage = () => {
  const { loading, error, data } = useQuery(GET_USER_PROFILE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { username, email, savedPlants } = data.me;

  return (
    <div className="profile">
      <h1>Profile</h1>
      <div>
        <h2>Username: {username}</h2>
        <p>Email: {email}</p>
      </div>
      <div>
        <h2>Saved Plants</h2>
        <ul>
          {savedPlants.map((plant) => (
            <li key={plant._id}>
              <img src={plant.image} alt={plant.title} />
              <p>{plant.title}</p>
              <p>{plant.description}</p>
              {plant.comment && (
                <p>Comment: {plant.comment.text}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;