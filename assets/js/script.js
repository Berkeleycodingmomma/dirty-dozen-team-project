$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/country?name=United States',
    headers: { 'X-Api-Key': 'YOUR_API_KEY'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});