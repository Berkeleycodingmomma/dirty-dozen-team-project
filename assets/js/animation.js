var elements = document.getElementsByClassName("header");

anime({
  targets: elements,
  translateX: 650,
  easing: 'linear',
  duration: 3000
});


function play() {
    var audio = new Audio('./assets/cacaw.mp3');
    audio.play();
  }