const request = require("request");

let breed = process.argv[2];

request(
  `https://api.hecatapi.com/v1/breeds/search?q=${breed}`,
  (error, response, body) => {
    // Edge case: Request failed
    if (error !== undefined) {
      console.log(`Request failed: '${error.hostname}' wasn't found.`);
      return;
    }

    // parse JSON string into object
    const data = JSON.parse(body);

    // Edge case: Breed not found
    if (data[0] === undefined) {
      console.log(`The '${breed}' breed has not been found in the database`);
      return;
    }

    // Request is successful
    console.log(`----- ${data[0].name} -----`);
    console.log(data[0].description); // Print the HTML for the Google homepage.
  }
);
