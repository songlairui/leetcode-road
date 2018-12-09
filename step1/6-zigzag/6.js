module.exports = function convert(s, numRows = 0) {
  if (numRows <= 1) return s;
  let result = "";
  let length = s.length;
  const chunk = numRows * 2 - 2;
  for (let i = 0; i < numRows; i++) {
    let j = i;
    const requireTwo = i !== 0 && i !== numRows - 1;
    const diff = chunk - i - i;
    while (j < length) {
      result += s[j];
      if (requireTwo && s[j + diff]) {
        result += s[j + diff];
      }
      j += chunk;
    }
  }
  return result;
};
