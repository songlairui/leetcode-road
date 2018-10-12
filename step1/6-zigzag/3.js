/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows = 0) {
  if (numRows < 2) return s
  const martix = new Array(numRows).fill('')
  let y = 0
  let down = true
  for (let i = 0; i < s.length; i++) {
    martix[y] += s[i]
    if (down) {
      y++
      if (y >= numRows - 1) {
        down = false
      }
    } else {
      y--
      if (y <= 0) {
        down = true
      }
    }
  }
  return martix.join('')
}

module.exports = convert
