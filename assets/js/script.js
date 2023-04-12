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


$('.search').on("click", function (event) {
	event.preventDefault();
	city = $(this).parent('.btnPar').siblings('.textVal').val().trim();
	if (city === "") {
		return;
	};
	cityHist.push(city);

	localStorage.setItem('city', JSON.stringify(cityHist));
	fiveForecastEl.empty();
	getHistory();
	getWeatherToday();
});

var contHistEl = $('.cityHist');

function getHistory() {
	contHistEl.empty();

	for (let i = 0; i < cityHist.length; i++) {

		var rowEl = $('<row>');
		var btnEl = $('<button>').text(`${cityHist[i]}`)

		rowEl.addClass('row histBtnRow');
		btnEl.addClass('btn btn-outline-secondary histBtn');
		btnEl.attr('type', 'button');

		contHistEl.prepend(rowEl);
		rowEl.append(btnEl);
	}
	if (!city) {
		return;
	}
	$('.histBtn').on("click", function (event) {
		event.preventDefault();
		city = $(this).text();
		fiveForecastEl.empty();
		getWeatherToday();
	});
};

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
