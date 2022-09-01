const request = require("request");

const fetchBreedDescription = (breedName, callback) => {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      // Edge case: Request failed
      if (error) {
        return callback(error, null);
      }

      // parse JSON string into object
      const data = JSON.parse(body);

      // Edge case: Breed not found
      if (data[0] === undefined) {
        error = "breed not found";
        return callback(error, null);
      }

      // Request is successful
      return callback(null, data);
    }
  );
};

module.exports = {
  fetchBreedDescription,
};
