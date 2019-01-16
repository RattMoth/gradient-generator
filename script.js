const css = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const body = document.getElementById('gradient');
const btn = document.querySelector('button');

function displayColorValues(c1, c2) {
  css.textContent = `linear-gradient(to right, ${c1}, ${c2});`;
}

function setGradient() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  displayColorValues(color1.value, color2.value);
}

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);

btn.addEventListener('click', (x) => {
  const randomColor = '#000000'.replace(/0/g, () => Math.floor(Math.random() * 16).toString(16));
  const randomColor2 = '#000000'.replace(/0/g, () => Math.floor(Math.random() * 16).toString(16));
  body.style.background = `linear-gradient(to right, ${randomColor}, ${randomColor2})`;
  displayColorValues(randomColor, randomColor2);
});
