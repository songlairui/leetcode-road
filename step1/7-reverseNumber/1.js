module.exports = function reverse(x) {
  const sgn = Math.sign(x);
  let rev = x * sgn;
  let result = 0;
  while (rev) {
    let last = rev % 10;
    rev = (rev - last) / 10;
    result = result * 10 + last;
    console.log("-", last, rev, result);
  }
  result = result * sgn;
  if (result >= Math.pow(2, 31) - 1 || result <= -Math.pow(2, 31)) return 0;
  return result;
};
