var elements = document.getElementsByClassName("header");
var factsElement = document.getElementsByClassName("right-side col-8 flex-d justify-content-space-between");
const countryFacts = document.getElementById("movie-title-container")
anime({
  targets: elements,
  translateX: 550,
  easing: 'linear',
  duration: 3000
});

anime({
    targets: factsElement,
    translateX: 350,
    delay: anime.stagger(300) // increase delay by 100ms for each elements.
});

function play() {
    var audio = new Audio('./assets/oh-yeah.mp3');
    audio.play();
  }
