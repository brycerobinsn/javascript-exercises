const rounder = function(num){
  return Math.round(num  * 10) / 10
}
const convertToCelsius = function(temp) {
  // (X - 32) x 5/9
  let y = (temp - 32) * (5/9)
  return rounder(y)
};

const convertToFahrenheit = function(temp) {
  // (X x 9/5 + 32)
  let y = temp * (9/5) + 32
  return rounder(y)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
