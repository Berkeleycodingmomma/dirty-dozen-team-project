var apiKey = "kiXeCA7mju1aj5ELXKhqpFu2BsA3SvXljqdqFaNx"

let options = {
    method: 'GET',
    headers: {
        'x-api-key': apiKey
    }
}

let url = 'https://api.api-ninjas.com/v1/country?name=united+states'


fetch(url, options)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(`error ${err}`)
    });


    
let options1= {
    method: 'GET',
}

let url1 = 'http://www.omdbapi.com/?apikey=b0f2dca4&t=john+wick'


fetch(url1, options1)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(`error ${err}`)
    });