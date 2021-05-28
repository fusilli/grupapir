var wszystkieWiecej = document.getElementsByClassName('wiecej');
var wszystkiePrzyciskiWiecej = document.getElementsByClassName('przycisk-wiecej');
for (var i = 0; i < wszystkieWiecej.length; ++i) {
  wszystkieWiecej[i].classList.add('hidden');
}
for (var i = 0; i < wszystkiePrzyciskiWiecej.length; ++i) {
  var przycisk = wszystkiePrzyciskiWiecej[i];
  przycisk.addEventListener('click', rozwin);
}
function rozwin(event) {
  var wiecej = event.target.previousElementSibling;
  if (wiecej.classList.contains('hidden')) {
    wiecej.classList.remove('hidden');
    event.target.textContent = 'Zwiń';
  } else {
    wiecej.classList.add('hidden');
    event.target.textContent = 'Więcej';
  }
}