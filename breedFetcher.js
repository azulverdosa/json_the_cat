const request = require('request');

const catBreadSearchWord = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${catBreadSearchWord}`;

request(url, (error, response, body) => {
  error && console.log('error:', error); // Print the error if one occurred
  response && console.log('statusCode:', response.statusCode); // Print the response status code if a response was received

  if (error) {
    return console.log("Failed to request details", error)
  }

  const data = JSON.parse(body);

  const breedBio = data[0];

  console.log(breedBio?.description || `'${catBreadSearchWord}' breed not found`);
});

