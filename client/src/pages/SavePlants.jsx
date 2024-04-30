// const apiKey = 'bdKVmf7eGU9F7pThLHlHOPG5axdB1pdPscutn0vB5EMdg6Y4As';

// function searchPlant(event) {
//     event.preventDefault();
//     let plantName = document.getElementById('plantName').value;
//     var myHeaders = new Headers();
//     myHeaders.append("Api-Key", apiKey);
//     myHeaders.append("Content-Type", "application/json");

//     var requestOptions = {
//         method: 'GET',
//         headers: myHeaders,
//         redirect: 'follow'
//     };

//     fetch(`https://plant.id/api/v3/kb/plants/name_search?q=${plantName}`, requestOptions)
//         .then(response => response.json())
//         .then(result => {
//             const access_token = result.entities[0].access_token;
//             getPlantDetailsAndUpdate(access_token);
//         })
//         .catch(error => console.log('error', error));
// }

// function getPlantDetailsAndUpdate(access_token) {
//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");
//     myHeaders.append("Api-Key", apiKey);

//     var requestOptions = {
//         method: 'GET',
//         headers: myHeaders,
//         redirect: 'follow'
//     };

//     fetch(`https://plant.id/api/v3/kb/plants/${access_token}?details=name,url,description,taxonomy,rank,gbif_id,inaturalist_id,image,synonyms,edible_parts,watering,propagation_methods&lang=en`, requestOptions)
//         .then(response => response.json())
//         .then(result => updatePlantDetails(result))
//         .catch(error => console.log('error', error));
// }

// function updatePlantDetails(plantDetails) {
//     const plantNameElement = document.getElementById("plantName");
//     const descriptionElement = document.getElementById("description");
//     const ediblePartsElement = document.getElementById("edible_parts");
//     const wateringElement = document.getElementById("watering");
//     const urlElement = document.getElementById("url");
//     const imageElement = document.getElementById("image");

//     if (plantNameElement) {
//         plantNameElement.textContent = plantDetails.name;
//     }

//     if (descriptionElement) {
//         descriptionElement.textContent = plantDetails.description.value;
//     }

//     if (ediblePartsElement && plantDetails.edible_parts) {
//         ediblePartsElement.textContent = `Edible Parts: ${plantDetails.edible_parts.join(", ")}`;
//     }

//     if (wateringElement) {
//         wateringElement.textContent = `Watering: ${plantDetails.watering.min} - ${plantDetails.watering.max} inches`;
//     }

//     if (urlElement) {
//         urlElement.href = plantDetails.url;
//     }

//     if (imageElement) {
//         imageElement.src = plantDetails.image.value;
//     }

//     const saveButton = document.getElementById("saveButton");
//     saveButton.addEventListener('click', () => {
//         const comment = document.getElementById("comment").value;
//         savePlantToProfile(plantDetails, comment);
//     });
// }

// function savePlantToProfile(plantDetails, comment) {
//     let userProfile = JSON.parse(localStorage.getItem('userProfile')) || { plants: [] };

 
//     const name = plantDetails.name || "Unknown";
//     const url = plantDetails.url || "Unknown";
//     const image = plantDetails.image && plantDetails.image.value ? plantDetails.image.value : "Unknown";

//     userProfile.plants.push({ name, url, image, comment });
//     localStorage.setItem('userProfile', JSON.stringify(userProfile));

//     console.log("Plant saved to profile with comment:", name, url, image, comment);
// }

// const plantInputForm = document.getElementById('plantInput');
// plantInputForm.addEventListener('submit', searchPlant);

// ^^^ This is the old search parameters using the API, not sure how to make the requests from the API yet correctly 



// const plants = []

import React from 'react';
import { useMutation } from '@apollo/client';
import { SAVE_PLANT } from '../utils/mutations';

const SavePlants = ({ plantId, comment }) => {
  const [savePlant] = useMutation(SAVE_PLANT, {
    refetchQueries: [{ query: GET_USER_PROFILE }],
  });

  const handleSavePlant = () => {
    savePlant({
      variables: { plantId, commentText: comment },
    });
  };

  return (
    <button onClick={handleSavePlant}>Save Plant</button>
  );
};

export default SavePlants;
//make sure is connecting to API