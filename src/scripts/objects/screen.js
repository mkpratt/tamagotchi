import Pixel from './pixel.js';

export default class Screen {

  constructor() {
    this.firstRender = false;
    this.pixelSpacing = 2;
    this.height = this.width = 16;
    this.pixels = [];
    this.screenElement = document.querySelector('#cnv');
    this.initPixels();
  }

  initPixels() {
    let canvasHeight = this.screenElement.height;
    let pixelWidth = (canvasHeight / this.height) - this.pixelSpacing;

    this.pixels = _.range(16).map((row, rIdx) => {
      let rSpacing = (rIdx > 0) ? this.pixelSpacing * rIdx : 0;
      let y = (rIdx * pixelWidth) + rSpacing;
      return _.range(16).map((pixel, pIdx) => {
        let pSpacing = (pIdx > 0) ? this.pixelSpacing * pIdx : 0;
        let x = (pIdx * pixelWidth) + pSpacing;
        return new Pixel(rIdx, pIdx, x, y, pixelWidth);
      })
    });
  }

  render(data) {
    let row = 0, pixel = 0;

    // for (let i = 0; i < animationData.length; i++) {
    //   let step = animationData[i];
    //   if (this.firstRender) {
    //     setTimeout(() => {
    //       this.renderStep(step);
    //     }, 500);
    //   } else {
    //     this.renderStep(step);
    //   }
    // }

    // animationData.forEach(step => {
    //   [...step].forEach(bit => {
    //     this.pixels[row][pixel].on = !!+bit; // Convert string '1' or '0' to boolean
    //     pixel++;
    //     if (pixel > 15) {
    //       pixel = 0;
    //       row++;
    //     }
    //   })
    // })

    // BINARY PARSE
    [...data].forEach(bit => {
      this.pixels[row][pixel].on = !!+bit; // Convert string '1' or '0' to boolean
      pixel++;
      if (pixel > 15) {
        pixel = 0;
        row++;
      }
    })

    // HEX PARSE
    // [...data].forEach(byte => {
    //   let bits = parseInt(byte, 16).toString(2).padStart(4, '0'); // Byte represenation
    //   [...bits].forEach(bit => {
    //     this.pixels[row][pixel].on = !!+bit; // Convert string 1 or 0 to boolean
    //     pixel++;
    //     if (pixel > 15) {
    //       pixel = 0;
    //       row++;
    //     }
    //   })
    // })
  }

  renderStep(step) {
    let row = 0, pixel = 0;
    [...step].forEach(bit => {
      this.pixels[row][pixel].on = !!+bit; // Convert string '1' or '0' to boolean
      pixel++;
      if (pixel > 15) {
        pixel = 0;
        row++;
      }
    })
  }

  clearScreen() {
    this.pixels.forEach(row => {
      row.forEach(pixel => {
        pixel.on = false;
      })
    })
  }

  exportBinary() {
    let rtn = '';
    this.pixels.forEach(row => {
      row.forEach(pixel => {
        rtn += pixel.on ? '1' : '0';
      })
    })

    return rtn;//parseInt(rtn, 2).toString(16).padStart(64, '0');
  }

}