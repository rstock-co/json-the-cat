const { fetchBreedDescription } = require("./breedFetcher");

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, data) => {
  if (error) {
    if (error === "breed not found") {
      console.log(
        `The '${breedName}' breed has not been found in the database`
      );
      return;
    }
    console.log(`Request failed: '${error.hostname}' wasn't found.`);
  } else {
    console.log(`----- ${data[0].name} -----`);
    console.log(data[0].description); // Print the HTML for the Google homepage.
  }
});
