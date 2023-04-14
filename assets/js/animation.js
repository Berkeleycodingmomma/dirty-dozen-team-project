var elements = document.getElementsByClassName("header");
// var factsElement = document.getElementsByClassName("anime");

anime({
  targets: elements,
  translateX: 560,
  easing: 'linear',
  duration: 3000
});

anime({
    targets: '.left-side',
    translateX: [
      { value: 100, duration: 500, delay: 2500 },
      { value: 100, duration: 500, delay: 2500 }
    ],
    translateY: [
      { value: 50, duration: 500 },
      { value: 50, duration: 500, delay: 2500 },
      { value: 50, duration: 500, delay: 2500 }
    ],
    scaleX: [
      { value: 4, duration: 2500, delay: 2500, easing: 'easeOutExpo' },
      { value: 1, duration: 2500 },
    ]
});

function play() {
    var audio = new Audio('./assets/oh-yeah.mp3');
    audio.play();
  }
