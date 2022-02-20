const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');
const {describe, it} = require('mocha');

describe("fetchBreedDescription", () => {
  it("returns a string description for a valid breed, via callback", (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      
      assert.equal(err, null); // we expect no error for this scenario
      assert.equal(desc, expectedDesc); // compare returned description

      done();
    });
  });

  it("expects 'meep' as a breed to error out", (done) => {
    const breed = 'meep'
    fetchBreedDescription(breed, (err) => {
      const expectedErr = `'${breed}' breed not found`;

      assert.equal(err, expectedErr);

      done();
    })
  })
});
