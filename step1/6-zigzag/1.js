/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows = 0) {
  if (numRows <= 1) return s
  const martix = new Array(numRows).fill(0).map(() => [])
  let x = 0
  let y = 0
  let down = true
  for (let i = 0; i < s.length; i++) {
    // console.warn(down ? '⬆' : '⬇', x, y)
    martix[y][x] = s[i]
    if (down) {
      y++
      if (y >= numRows - 1) {
        down = false
      }
    } else {
      x++
      y--
      if (y <= 0) {
        down = true
      }
    }
  }
  const debugInfo = martix
    .map(arr => Object.assign(new Array(arr.length).fill(' '), arr).join(' '))
    .join('\n')
  console.warn(debugInfo)
  return martix.map(array => array.join('')).join('')
}

module.exports = convert
