//Test that our APIs work. Will remove once js working

var input=document.getElementById("movieTitle");
var apiKey = "kiXeCA7mju1aj5ELXKhqpFu2BsA3SvXljqdqFaNx"
let countryData = [];
let country;

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

let options1= {
    method: 'GET',
}
//Call to omdb
var omdbKey = "b0f2dca4"
let getMovie="http://www.omdbapi.com/?apikey=" + omdbKey + "&t=" + title
console.log(getMovie);
fetch(getMovie, options1)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data);
        //specify we want "country"
         country = data.Country
        console.log(country);
        //add "country" value to call to api ninja
        let url = `https://api.api-ninjas.com/v1/country?name=${country.replaceAll(" ", "+")}`
        fetch(url, options)
            .then(res => res.json()) // parse response as JSON
            .then(countryData => {
                console.log(countryData)
                displayList(countryData)
            })
            .catch(err => {
                console.log(`error ${err}`)
            }) 
         })
    }

   //now parse out that information to complete our list of 12
function displayList(countryData) {
    let capital 
    if (countryData[0].capital) {
        capital = countryData[0].capital
    } else {
        capital = "No Capital Found"
    }
    $("#movie-country-facts").children().eq(0).text("12 Random Facts About:  " + country);
    $("#movie-country-facts").children().eq(1).text("1. Capital:   " + capital);
    $("#movie-country-facts").children().eq(2).text("2. Population:   " + countryData[0].population + " million");
    $("#movie-country-facts").children().eq(3).text("3. Currency:   " + countryData[0].currency.name + " " + countryData[0].currency.code);
    $("#movie-country-facts").children().eq(4).text("4. Unemployment:   " + countryData[0].unemployment + "%");
    $("#movie-country-facts").children().eq(5).text("5. Fertility:   " + countryData[0].fertility + "%" );
    $("#movie-country-facts").children().eq(6).text("6. Infant Mortality:   " + countryData[0].infant_mortality + "%");
    $("#movie-country-facts").children().eq(7).text("7. Women Enrolled in Secondary Education:   " + countryData[0].secondary_school_enrollment_female + "%");
    $("#movie-country-facts").children().eq(8).text("8. Men Enrolled in Secondary Education:   " + countryData[0].secondary_school_enrollment_male + "%");
    $("#movie-country-facts").children().eq(9).text("9. Forested Area:   " + countryData[0].forested_area +"% of all area");
    $("#movie-country-facts").children().eq(10).text("10. Threatened Species:   " + countryData[0].threatened_species + " species are endangered here.");
    $("#movie-country-facts").children().eq(11).text("11. Life Expectancy Female:  " + countryData[0].life_expectancy_female + " Years of Age");
    $("#movie-country-facts").children().eq(12).text("12. Life Expectancy Male:   " + countryData[0].life_expectancy_male + " Years of Age");
}



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



