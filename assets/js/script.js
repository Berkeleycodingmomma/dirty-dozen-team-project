//Test that our APIs work. Will remove once js working
// var apiKey = "kiXeCA7mju1aj5ELXKhqpFu2BsA3SvXljqdqFaNx"
// let options = {
//     method: 'GET',
//     headers: {
//         'x-api-key': apiKey
//     }
// }

// let url = 'https://api.api-ninjas.com/v1/country?name=united+states'
// fetch(url, options)
//     .then(res => res.json()) // parse response as JSON
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     });  
// let options1= {
//     method: 'GET',
// }
// let url1 = 'http://www.omdbapi.com/?apikey=b0f2dca4&t=Grease'
// fetch(url1, options1)
//     .then(res => res.json()) // parse response as JSON
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     });

 
var omdbKey = "b0f2dca4"
let findTitle=function(input) {
    let getMovie="https://www.omdbapi.com/?apikey=" + omdbKey + "&t"
    fetch(getMovie)
    .then(function(response) {
        console.log(response);
        return response.json();
        })
}

$(".btn").on("click", function (event){
    event.preventDefault();
    let searchBtn = $(event.target).attr("id")
    findTitle(searchBtn)
})




// // var startPage = function () {
// //     $("#movie-country-facts").hide()

// //     var titleString=JSON.parse(localStorage.getItem("titleString")) || [];
// //     titleString.forEach(function (title) {
// //         var appendedButton=$(("<li></li>"))
// //         appendedButton.text(title)
// //         appendedButton.attr("id", title)
// //         appendedButton.addClass("movie btn btn-block")
// //         var buttonMovieList=$("#movie-title-container")
// //         buttonMovieList.append(appendedButton)
// //     })
// // }
// // startPage();


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
