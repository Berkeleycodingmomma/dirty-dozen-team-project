var elements = document.getElementsByClassName("header");
// var factsElement = document.getElementsByClassName("anime");

anime({
  targets: elements,
  translateX: 550,
  easing: 'linear',
  duration: 3000
});

anime({
    targets: '.left-side',
    translateX: [
      { value: 20, duration: 500, delay: 2500 },
      { value: 0, duration: 500, delay: 2500 }
    ],
    translateY: [
      { value: -20, duration: 500 },
      { value: 20, duration: 500, delay: 2500 },
      { value: 0, duration: 500, delay: 2500 }
    ],
    scaleX: [
      { value: 4, duration: 2100, delay: 2500, easing: 'easeOutExpo' },
      { value: 1, duration: 2900 },
      { value: 4, duration: 2100, delay: 2500, easing: 'easeOutExpo' },
      { value: 1, duration: 2900 }
    ],
    scaleY: [
      { value: [1.75, 1], duration: 2500 },
      { value: 2, duration: 2500, delay: 2500, easing: 'easeOutExpo' },
      { value: 1, duration: 2450 },
      { value: 1.75, duration: 2500, delay: 2500, easing: 'easeOutExpo' },
      { value: 1, duration: 2450 }
    ],
});

function play() {
    var audio = new Audio('./assets/oh-yeah.mp3');
    audio.play();
  }
