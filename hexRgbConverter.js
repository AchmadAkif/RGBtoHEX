//RGB to HEX color code achmadakif 14.09.23
const btn = document.getElementById('btn');
let red = document.getElementById('redCode'),
  green = document.getElementById('greenCode'),
  blue = document.getElementById('blueCode');
let hexInput = document.getElementById('hexCode');



const rgbToHex = {
  0:0, 1:1,
  2:2, 3:3,
  4:4, 5:5,
  6:6, 7:7,
  8:8, 9:9,
  10:'A', 11:'B', 
  12:'C', 13:'D', 
  14:'E', 15:'F'
}

btn.addEventListener('click', ()=>{
  let hex = '';
  
  // Convert RGB to Hex
  if (!red.value == 0 || !green.value == 0 || !blue.value == 0) {
    let rgbRed = document.getElementById('redCode').value,
    rgbGreen = document.getElementById('greenCode').value,
    rgbBlue = document.getElementById('blueCode').value;

    function convertRed (r) {
      //Divide by 16
      let division = r / 16;
      let floored = Math.floor(division);
      //Get the decimal part then multiply by 16
      let decimalPart = (division - floored) * 16;
      //Find HEX value in Object
      hex += rgbToHex[floored]
      hex += rgbToHex[decimalPart]
    }
    convertRed(rgbRed)
    
    function convertGreen (g) {
      let division = g / 16;
      let floored = Math.floor(division);
      let decimalPart = (division - floored) * 16;
    
      hex += rgbToHex[floored] 
      hex += rgbToHex[decimalPart]
    }
    convertGreen(rgbGreen)
    
    function convertBlue (b) {
      let division = b / 16;
      let floored = Math.floor(division);
      let decimalPart = (division - floored) * 16;
    
      hex += rgbToHex[floored] 
      hex += rgbToHex[decimalPart]
    }
    convertBlue(rgbBlue)

    hexInput.value = hex
    red.value = '';
    green.value = '';
    blue.value = '';
  } 

  // Convert Hex to RGB
  else if (!hexInput.value == 0) {
    function convertHex (hex) {
      var bigint = parseInt(hex, 16);
      var r = (bigint >> 16) & 255;
      var g = (bigint >> 8) & 255;
      var b = bigint & 255;

      red.value = r;
      green.value = g;
      blue.value = b;

      hexInput.value = '';
    }
    convertHex(hexInput.value)
  }
})

function removeValue () {
  red.value = '';
  green.value = '';
  blue.value = '';
}



