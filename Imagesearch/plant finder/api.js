//plant.id api search feature
// still working.
export const PlantDelete = (plantId, token) => {
  return fetch(`/api/users/plants/${plantId}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

export const PlantSave = (plantData, token) => {
  return fetch("/api/users", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(plantData),
  });
};
//plant.id api info
export const PlantSearch = (files) => {

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
  
    const API_KEY = process.env.REACT_APP_API_KEY;
    console.log("API_KEY", API_KEY)
    
    const data = {
      api_key: "",
      images: base64files,

      modifiers: ["similar_images"],
      plant_language: "en",
      

      plant_details: [
        "common_names",
        "url",
      ],
    };

    return new Promise((resolve, reject) => {
      fetch("https://api.plant.id/v3/identify", {
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

