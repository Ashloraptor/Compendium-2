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

    const API_KEY =  "Svu3TpQRHpDX8CVSWwkbErq8QwhyDvbzYoBsqkkx26kWPXe9b9";
    // const API_KEY =  {process.env.REACT_APP_SECRET_KEY};
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

