var YOUR_API_KEY = emiNrDQSin0iMr+zUqMffA==QW7Bq8o94O42es2y

const request = require('request');

request.get({
  url: 'https://api.api-ninjas.com/v1/country?name=United States',
  headers: {
    'X-Api-Key': 'YOUR_API_KEY'
  },
}, function(error, response, body) {
  if(error) return console.error('Request failed:', error);
  else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
  else console.log(body)
});