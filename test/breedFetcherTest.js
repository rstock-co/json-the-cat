const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, data) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, data[0].description.trim());

      done();
    });
  });
  it('returns the appropriate error message when an invalid/non existent breed is passed in, via callback', (done) => {
    fetchBreedDescription('Xypelf', (err, data) => {
      // we expect no data for this scenario
      assert.equal(data, null);
      const expectedError = "breed not found";

      // compare returned description
      assert.equal(expectedError, err);

      done();
    });
  });
});