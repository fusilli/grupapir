anime.timeline({loop: true})
  .add({
    targets: '.zdanie1 .litera',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 2000,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.zdanie1 .litera',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1000,
    delay: (el, i) => 100 + 5 * i
  })
  .add({
    targets: '.zdanie2 .litera',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 2000,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.zdanie2 .litera',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1000,
    delay: (el, i) => 100 + 5 * i
  })
  .add({
    targets: '.zdanie3 .litera',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 2000,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.zdanie3 .litera',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1000,
    delay: (el, i) => 100 + 5 * i
  })
  .add({
    targets: '.zdanie4 .litera',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 2000,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.zdanie4 .litera',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1000,
    delay: (el, i) => 100 + 5 * i
  });