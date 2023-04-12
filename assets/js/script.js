//Test that our APIs work. Will remove once js working

var input=document.getElementById("movieTitle");
var apiKey = "kiXeCA7mju1aj5ELXKhqpFu2BsA3SvXljqdqFaNx"

$('.btn').on("click", function (event) {
    event.preventDefault();
    var title = $("#movieTitle").val();
   findTitle(title)
});


let options = {
    method: 'GET',
    headers: {
        'x-api-key': apiKey
    }
}

let findTitle=function(title) {
console.log(title)

//let url = 'https://api.api-ninjas.com/v1/country?name=united+states'
// let url = 'https://api.api-ninjas.com/v1/country?name=united+states'
// fetch(url, options)
//     .then(res => res.json()) // parse response as JSON
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     });  
let options1= {
    method: 'GET',
}

var omdbKey = "b0f2dca4"
//let url1 = 'http://www.omdbapi.com/?apikey=b0f2dca4&t=Grease'
let getMovie="http://www.omdbapi.com/?apikey=" + omdbKey + "&t=" + title
console.log(getMovie);
fetch(getMovie, options1)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data);
        let country = data.Country
        console.log(country);
        let url = `https://api.api-ninjas.com/v1/country?name=${country.replaceAll(" ", "+")}`
        fetch(url, options)
            .then(res => res.json()) // parse response as JSON
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(`error ${err}`)
            });  
    })
    .catch(err => {
        console.log(`error ${err}`)
    }) 
    
    // .then(function (data) {
    //     let country = object.data('country')
    //     console.log(country)
    //  })

}


// };

// var startPage = function () {
//     $("#movie-country-facts").hide()

//     var titleString=JSON.parse(localStorage.getItem("titleString")) || [];
//     titleString.forEach(function (title) {
//         var appendedButton=$(("<li></li>"))
//         appendedButton.text(title)
//         appendedButton.attr("id", title)
//         appendedButton.addClass("movie btn btn-block")
//         var buttonMovieList=$("#movie-title-container")
//         buttonMovieList.append(appendedButton)
//     })
// }
// startPage();


// // $("#searchBtn").on("click" || "search", function(event) {
// //     event.preventDefault();
// //     var movieTitle =$("#movieTitle").val();
// //     var titleString = JSON.parse(localStorage.getItem("titleString")) || [];
// //     if (!movieTitle){
// //         alert ("Please enter a movie name.")
// //         //this needs to be replaced with a modal//
// //     }else {
// //         var appendedButton=$(("<li></li>"))
// //         appendedButton.text(title)
// //         appendedButton.attr("id", title)
// //         appendedButton.addClass("movie btn btn-block")
// //         var buttonMovieList=$("#movie-title-container")
// //         buttonMovieList.append(appendedButton)
// //         titleString.push(movieTitle)
// //         localStorage.setItem("titleString", JSON.stringify(titleString));
// //         findTitle(movieTitle);
// //     }
// // });
