/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows = 0) {
  if (numRows <= 1) return s
  const martix = new Array(numRows).fill('')
  let y = 0
  let reserve = 0
  let down = 1
  for (let i = 0; i < s.length; i++) {
    martix[y] += s[i]
    y += down
    reserve++
    if (reserve >= numRows - 1) {
      reserve = 0
      down = -down
    }
  }
  return martix.join('')
}

module.exports = convert
