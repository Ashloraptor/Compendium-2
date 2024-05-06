import React from 'react';

const SavedPlants = ({ plants }) => {
  return (
    <div className="saved-plants">
      <h2>Saved Plants</h2>
      <ul>
        {plants.map((plant) => (
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
  );
};

export default SavedPlants;