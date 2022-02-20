const request = require('request');

const fetchBreedDescription = (breed, callback) => {
  if (breed) {
    const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
    
    return request(url, (error, response, body) => {
      if (error) {
        return callback(error, null);
      }

      const data = JSON.parse(body);
      const breedBio = data[0];

      return breedBio 
        ? callback(null, breedBio?.description?.trim())
        : callback(`'${breed}' breed not found`, null);
    });
  }

  return callback('Need a breed, bro', null)
};

module.exports = { fetchBreedDescription };

