import Screen from './objects/screen.js';
import One from './characters/one.js';

let canvas = document.querySelector('#cnv');
let ctx = canvas.getContext('2d');

const off = '#e5e5e5', on = '#000000';

let screen = new Screen();
let character = new One();

var animationInterval;

setTimeout(() => {
  startAnimations(character.stateAnimations['normal']);
}, 0);

draw();

function startAnimations(animationSet) {
  clearInterval(animationInterval);
  let step = 0;
  animationInterval = setInterval(renderStep, 700);

  function renderStep() {
    screen.render(animationSet[step]);
    step++;
    if (step >= animationSet.length) {
      step = 0;
    }
  }
}

function drawPixel(pixel) {
  ctx.fillStyle = pixel.on ? on : off;
  ctx.fillRect(pixel.x, pixel.y, pixel.width, pixel.height);
}

function draw() {
  clearCanvas();

  screen.pixels.forEach(row => {
    row.forEach(pixel => {
      drawPixel(pixel);
    })
  })
  
  // wait for pixels to be rendered
  setTimeout(() => {
    requestAnimationFrame(draw);
  }, 0);
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// canvas.addEventListener('click', e => {
//   rowLoop: for(let i = 0; i < screen.pixels.length; i++) {
//     let row = screen.pixels[i];
//     pixelLoop: for (let j = 0; j < row.length; j++) {
//       let pixel = row[j];

//       if ((pixel.x <= e.offsetX) && (pixel.x + pixel.width >= e.offsetX) &&
//           (pixel.y <= e.offsetY) && (pixel.y + pixel.width >= e.offsetY)) {
//         pixel.on = !pixel.on;
//         // console.log(pixel.on);
//         break rowLoop;
//       }
//     }
//   }
// }, false)

// document.querySelector('#export').addEventListener('click', exportBinary, false); 
// function exportBinary() {
//   console.log(screen.exportBinary());
// }
// document.querySelector('#clear').addEventListener('click', clearScreen, false); 
// function clearScreen() {
//   clearInterval(animationInterval);
//   screen.clearScreen();
// }

document.querySelector('#btnNormal').addEventListener('click', setNormal, false); 
function setNormal() {
  startAnimations(character.stateAnimations['normal']);
}

document.querySelector('#btnHungry').addEventListener('click', setHungry, false); 
function setHungry() {
  startAnimations(character.stateAnimations['hungry']);
}

document.querySelector('#btnEating').addEventListener('click', setEating, false); 
function setEating() {
  startAnimations(character.stateAnimations['eating']);
}

document.querySelector('#btnSnacking').addEventListener('click', setSnacking, false); 
function setSnacking() {
  startAnimations(character.stateAnimations['snacking']);
}

document.querySelector('#btnBadMood').addEventListener('click', setBadMood, false); 
function setBadMood() {
  startAnimations(character.stateAnimations['badmood']);
}

document.querySelector('#btnGoodMood').addEventListener('click', setGoodMood, false); 
function setGoodMood() {
  startAnimations(character.stateAnimations['goodmood']);
}

document.querySelector('#btnPooped').addEventListener('click', setPooped, false); 
function setPooped() {
  startAnimations(character.stateAnimations['pooped']);
}