import Screen from './objects/screen.js';
import One from './characters/one.js';

let canvas = document.querySelector('#cnv');
let ctx = canvas.getContext('2d');

const off = '#e5e5e5', on = '#000000';

let screen = new Screen();
let character = new One();

setTimeout(() => {
  startAnimations(character.stateAnimations['normal']);
}, 0);

draw();

function startAnimations(animationSet) {
  let step = 0;
  setInterval(() => {
    screen.render(animationSet[step]);
    step++;
    if (step >= animationSet.length) {
      step = 0;
    }
  }, 700);
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
//         console.log(pixel.on);
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
//   screen.clearScreen();
// }