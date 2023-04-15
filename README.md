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
The User will type a movie title in the search box.  Next they will click the search button. It will then bring up twelve intresting facts about the country that the particular movie was filmed in. It will store the tittle to the left for the user to see on the side of the page under the search button if user wants to click on again, and is so it will bring up the 12 facts again. 

## Visual image of our Deplloyed site

![Alt text](./assets/images/Screen%20Shot%202023-04-14%20at%201.48.45%20PM.png)





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





[screen-capture (2).webm](https://user-images.githubusercontent.com/128196644/232180341-b63a7117-5b80-4e32-8342-dc7435e1f979.webm)

---------------------------------------------------------------------------------------------------------------------------------------------------------
## Author Info

### Amanda Gray, Kevin Huang, Caleb Lapitan, Tamara Dusenbury


* [Deployed Application link](https://berkeleycodingmomma.github.io/dirty-dozen-team-project/)
```

## Credits
<<<<<<< HEAD

Shout out to all the TA's and Google Search!

=======
GOOGLE!  Seriously, thank you google search!
>>>>>>> 78cf9f68f985dbcd0106f61de924ff4e4e03a882



© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.


