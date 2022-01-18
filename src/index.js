module.exports = function reverse (n) {
  let stringN= Math.abs(n).toString();
  let stringResult = '';

  for (let i = 0; i < stringN.length; i += 1) {
      stringResult = `${stringN[i]}${stringResult}`;
  }
  let result = Number(stringResult);

  return(result);
}
