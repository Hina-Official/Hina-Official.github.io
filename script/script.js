/*var textWrapper = document.querySelector('.ml14 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline({loop: false})
.add({
  targets: '.ml14 .line',
  scaleX: [0,1],
  opacity: [0.5,1],
  easing: "easeInOutExpo",
  duration: 1200
}).add({
  targets: '.ml14 .letter',
  opacity: [0,1],
  translateX: [100,0],
  translateZ: 0,
  scaleX: [0.3, 1],
  easing: "easeOutExpo",
  duration: 800,
  offset: '-=600',
  delay: (el, i) => 150 + 25 * i
});

var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
setTimeout(function() {
  anime.timeline({loop: false})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  });
}, 1000);*/