export default class Pixel {
  constructor(row, col, x, y, w) {
    this.row = row;
    this.col = col;
    this.x = x;
    this.y = y;
    this.height = this.width = w;
    this.on = false;
  }

  // constructor(x, y, w) {
  //   this.x = x;
  //   this.y = y;
  //   this.height = this.width = w;
  //   this.on = false;
  // }
}