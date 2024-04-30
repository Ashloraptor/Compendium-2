import React from 'react';
import { useQuery } from '@apollo/client';
import { SEARCH_PLANTS } from '../utils/queries';
import PlantSearchForm from './SearchPlantForm';
import SavePlants from './SavePlants';


const HomePage = () => {
  // Fetch plant data
  const { loading, error, data } = useQuery(SEARCH_PLANTS);

  // Extract plants from data (assuming 'searchPlants' is the field name)
  const plants = data?.searchPlants || [];

  // Define a function to handle search
  const handleSearch = (searchQuery, comment) => {
    // Implement search logic here
    console.log('Searching for:', searchQuery);
    console.log('Comment:', comment);
  };

  return (
    <div className="home-page">
      <header>
        {/* Header content */}
      </header>
      <main>
        <section className="search-section">
          <div className="container">
            <PlantSearchForm onSearch={handleSearch} />
          </div>
        </section>
        <section className="plant-list-section">
          <div className="container">
            <h2>Your Plants</h2>
            {loading ? (
              <p>Loading plants...</p>
            ) : error ? (
              <p>Error fetching plants. Please try again later.</p>
            ) : (
              <ul>
                {plants.map(plant => (
                  <li key={plant.id}>
                    {plant.name}
                    {/* Render SavePlants component for each plant */}
                    <SavePlants plantId={plant.id} comment="Add your comment here" />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </main>
      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default HomePage;