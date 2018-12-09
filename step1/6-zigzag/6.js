module.exports = function convert(s, numRows = 0) {
  if (numRows === 1) return s;
  let result = "";
  let length = s.length;
  var chunk = numRows * 2 - 2;
  for (var i = 0; i < numRows; i++) {
    var j = i;
    const requireTwo = i !== 0 && i !== numRows - 1;
    while (j < length) {
      result += s[j];
      if (requireTwo && s[j + chunk - i - i]) {
        result += s[j + chunk - i - i];
      }
      j += chunk;
    }
  }
  return result;
};
