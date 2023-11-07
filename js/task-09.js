function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
document.querySelector('.change-color').addEventListener('click', function() {
  var body = document.querySelector('body');
  var colorSpan = document.querySelector('.color');
  var randomColor = getRandomHexColor();

  body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});

