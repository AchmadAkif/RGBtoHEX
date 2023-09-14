//RGB to HEX color code
//rgb(a, b, c)
const counting = {1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, 10:'A', 11:'B', 12:'C', 13:'D', 14:'E', 15:'F'}
let hex = '';

let rgbRed = prompt('masukkan kode RED');
function convertRed (r) {
  //Divide by 16
  let division = r / 16;
  let floored = Math.floor(division);
  //Get the decimal part then multiply by 16
  let decimalPart = (division - floored) * 16;
  //Find HEX value in Object
  hex += counting[floored] + counting[decimalPart]

  console.log(floored)
  console.log(decimalPart)
}
convertRed(rgbRed)

let rgbGreen = prompt('masukkan kode GREEN');
function convertGreen (g) {
  let division = g / 16;
  let floored = Math.floor(division);
  let decimalPart = (division - floored) * 16;

  hex += counting[floored] + counting[decimalPart]

  console.log(floored)
  console.log(decimalPart)
}
convertGreen(rgbGreen)

let rgbBlue = prompt('masukkan kode BLUE');
function convertBlue (b) {
  let division = b / 16;
  let floored = Math.floor(division);
  let decimalPart = (division - floored) * 16;

  hex += counting[floored] + counting[decimalPart]

  console.log(floored)
  console.log(decimalPart)
}
convertBlue(rgbBlue)

console.log(hex)



