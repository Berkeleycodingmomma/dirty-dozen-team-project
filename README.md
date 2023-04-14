# dirty-dozen-team-project


# "12 Random Facts about the country your movie was filed in"<br> Interactive Front-End Application 



## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
API key: https://api-ninjas.com/api/country
Bulma info: https://bulma.io/documentation/columns/responsiveness/
background img: https://depositphotos.com/stock-photos/cinema-background.html
anime: https://animejs.com/


## Description 
The User will type a movie title in the search box.  Next they will click the search button. It will then bring up twelve intresting facts about the country that particular movie was filmed in. it will store the tittle to the left of the page under the search button for user to click on again if needed and it will brign up the 12 facts again. 





## Code examples


--------------------------------------------------------------------------------------------------------------------------------------------------------

 ```sh
 
//Call to omdb
    var omdbKey = "b0f2dca4"
    let getMovie="http://www.omdbapi.com/?apikey=" + omdbKey + "&t=" + title
    fetch(getMovie, options1)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data);
            //specify we want "country"
            country = data.Country
            var oneCountry= country.split(',')
            console.log(oneCountry[0], "This is our country");
            //console.log(country.split(','));


```

**(ABOVE)- We had to learn how to seperate countries

--------------------------------------------------------------------------------------------------------------------------------------------------------
```sh
    
 <header class="header">
        <h1 class="title is-spaced 5">The Dirty Dozen:</h1>
        <p class="subtitle is-3 is-spaced 3"> 12 Random Facts About the Country Your Movie was
            Filmed In</p>
    </header>

```

**(ABOVE)- We used "Bulma" to size our fonts and spacing.
--------------------------------------------------------------------------------------------------------------------------------------------------------
```sh

$("#movie-title-container").on("click", function (event) {
    event.preventDefault();
    let buttonSearch=$(event.target).attr("id")
    console.log(buttonSearch, "buttonSearch")
    findTitle(buttonSearch)
   //play();
});

```
**(ABOVE)- We added a sound effect

---------------------------------------------------------------------------------------------------------------------------------------------------------
```sh
  
body {
    background-image: url(../images/movie\ img\ 1.jpeg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
    height: 1500px;
}

```
**(ABOVE)- We added a background pictures

---------------------------------------------------------------------------------------------------------------------------------------------------------
## Author Info

### Amanda Gray, Kevin Huang, Caleb Lapitan, Tamara Dusenbury


* [Deployed Application link](https://berkeleycodingmomma.github.io/dirty-dozen-team-project/)
```

## Credits
GOOGLE!  Seriously, thank you google search!



© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.


