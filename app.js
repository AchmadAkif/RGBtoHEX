//RGB to HEX color code achmadakif 14.09.23
const btn = document.getElementById('btn');
let red = document.getElementById('redCode'),
  green = document.getElementById('greenCode'),
  blue = document.getElementById('blueCode');


const counting = {
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
      hex += counting[floored]
      hex += counting[decimalPart]
    }
    convertRed(rgbRed)
    
    function convertGreen (g) {
      let division = g / 16;
      let floored = Math.floor(division);
      let decimalPart = (division - floored) * 16;
    
      hex += counting[floored] 
      hex += counting[decimalPart]
    }
    convertGreen(rgbGreen)
    
    function convertBlue (b) {
      let division = b / 16;
      let floored = Math.floor(division);
      let decimalPart = (division - floored) * 16;
    
      hex += counting[floored] 
      hex += counting[decimalPart]
    }
    convertBlue(rgbBlue)

  let hexInput = document.getElementById('hexCode');
  hexInput.value = hex


  red.value = '';
  green.value = '';
  blue.value = '';
})







