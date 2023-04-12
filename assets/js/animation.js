var elements = document.getElementsByClassName("header");
var factsElement = document.getElementsByClassName("right-side col-8 flex-d justify-content-space-between");

anime({
  targets: elements,
  translateX: 650,
  easing: 'linear',
  duration: 3000
});

anime({
    targets: factsElement,
    translateX: 270,
    delay: anime.stagger(100) // increase delay by 100ms for each elements.
});

function play() {
    var audio = new Audio('./assets/cacaw.mp3');
    audio.play();
  }
