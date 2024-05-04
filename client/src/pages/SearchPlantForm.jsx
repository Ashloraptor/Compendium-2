// import React, { useState } from 'react';
import { useState, useEffect } from 'react';

import { useMutation } from '@apollo/client';

//imported from Mod 21
import {
  Container,
  Col,
  Form,
  Button,
  Card,
  Row
} from 'react-bootstrap';

import Auth from '../utils/auth';
import { searchPlants } from '../utils/API';
import { ADD_PLANT} from '../utils/mutations';
import { savePlantIds, getSavedPlantIds } from '../utils/localStorage';

const SearchPlants = () => {
  const [savePlant, {error, data}] = useMutation(ADD_PLANT);
  
  // create state for holding returned api data
  const [searchedPlants, setSearchedPlants] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState('');
  // create state to hold saved PlantId values
  const [savedPlantIds, setSavedPlantIds] = useState(getSavedPlantIds());

  // set up useEffect hook to save `savedPlantIds` list to localStorage on component unmount
  // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
  useEffect(() => {
    return () => savePlantIds(savedPlantIds);
  });

  // create method to search for Plants and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await searchPlants(searchInput);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { items } = await response.json();

      const PlantData = items.map((Plant) => ({
        plantId: plant.id,
        scientificName: plant.volumeInfo.scientific_name || [''], //not sure how to replace volumeInfo
        commonName: plant.volumeInfo.common_name,
        description: plant.volumeInfo.description,
        image: plant.volumeInfo.imageLinks?.thumbnail || '',
      })); //not confident in the addressed points of query

      setSearchedPlants(plantData);
      setSearchInput('');
    } catch (err) {
      console.error(err);
    }
  };

  // create function to handle saving a Plant to our database
  const handleSavePlant = async (plantId) => {
    // find the Plant in `searchedPlants` state by the matching id
    const plantToSave = searchedPlants.find((plant) => plant.plantId === plantId);

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await savePlant({
        variables: {Plant: plantToSave},
      });

      // if Plant successfully saves to user's account, save Plant id to state
      setSavedPlantIds([...savedPlantIds, plantToSave.plantId]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="text-light bg-dark p-5">
        <Container>
          <h1>Search for Plants!</h1>
          <Form onSubmit={handleFormSubmit}>
            <Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name='searchInput'
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type='text'
                  size='lg'
                  placeholder='Search for a Plant'
                />
              </Col>
              <Col xs={12} md={4}>
                <Button type='submit' variant='success' size='lg'>
                  Submit Search
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>

      <Container>
        <h2 className='pt-5'>
          {searchedPlants.length
            ? `Viewing ${searchedPlants.length} results:`
            : 'Search for a Plant to begin'}
        </h2>
        <Row>
          {searchedPlants.map((plant) => {
            return (
              <Col md="4" key={plant.plantId}>
                <Card border='dark'>
                  {plant.image ? (
                    <Card.Img src={plant.image} alt={`The cover for ${plant.title}`} variant='top' />
                  ) : null}
                  <Card.Body>
                    <Card.Title>{plant.title}</Card.Title>
                    <p className='small'>Scientific Name: {plant.scientific_name}</p>
                    <Card.Text>{plant.description}</Card.Text>
                    {Auth.loggedIn() && (
                      <Button
                        disabled={savedPlantIds?.some((savedPlantId) => savedPlantId === plant.plantId)}
                        className='btn-block btn-info'
                        onClick={() => handleSavePlant(plant.plantId)}>
                        {savedPlantIds?.some((savedPlantId) => savedPlantId === plant.plantId)
                          ? 'This Plant has already been saved!'
                          : 'Save this Plant!'}
                      </Button>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

// const PlantSearchForm = ({ onSearch }) => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [comment, setComment] = useState('');

//   const handleChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleCommentChange = (event) => {
//     setComment(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onSearch(searchQuery, comment);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="plant-search-form">
//       <input
//         type="text"
//         placeholder="Search for plants..."
//         value={searchQuery}
//         onChange={handleChange}
//         className="search-input"
//       />
//       <input
//         type="text"
//         placeholder="Add a comment"
//         value={comment}
//         onChange={handleCommentChange}
//         className="comment-input"
//       />
//       <button type="submit" className="search-button">
//         Search
//       </button>
//     </form>
//   );
// };

// export default plantSearchForm;
//fix to work with api
export default SearchPlants;