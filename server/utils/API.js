
// export const getMe = (token) => {
//   return fetch("/api/users/me", {
//     headers: {
//       "Content-Type": "application/json",
//       authorization: `Bearer ${token}`,
//     },
//   });
// };

// export const AddUser = (userData) => {
//   return fetch("/api/users", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(userData),
//   });
// };

// export const login = (userData) => {
//   return fetch("/api/users/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(userData),
//   });
// };


// export const savePlant = (plantData, token) => {
//   return fetch("/api/users", {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//       authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify(plantData),
//   });
// };


// const test = require('dotenv').config()
import dotenv from 'dotenv';
// console.log(test)


export const searchPlants = (files) => {
  const promises = files.map((file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const res = event.target.result;
        
        resolve(res);
      };
      reader.readAsDataURL(file);
    });
  });

  return Promise.all(promises).then((base64files) => {
    
    // console.log(import.meta.env.local)
    // console.log(import.meta.env.SECRET_KEY)
    console.log(import.meta.env.VITE_SECRET_KEY)
    // console.log(process.env.REACT_APP_SECRET_KEY)
    // const API_KEY =  "APIKeyHere";
    // const API_KEY =  import.meta.env.local;
    // const API_KEY =  import.meta.env.SECRET_KEY;
    const API_KEY =  import.meta.env.VITE_SECRET_KEY;
    // const API_KEY =  process.env.REACT_APP_SECRET_KEY;
    // console.log(API_KEY);
    
    const data = {
      api_key: API_KEY,
      images: base64files,
      
      modifiers: ["crops_fast", "similar_images"],
      plant_language: "en",
      

      plant_details: [
        "common_names",
        "url",
        "name_authority",
        "wiki_description",
        "taxonomy",
        "synonyms",
      ],
    };

    return new Promise((resolve, reject) => {
      fetch("https://api.plant.id/v2/identify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          resolve(data);
        })
        .catch((error) => {
          console.log("Error:", data);
          reject(error);
        });
    });
  });
};