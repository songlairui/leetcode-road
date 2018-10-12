/** 遍历
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length <= 1) return s
  let start = 0
  let maxLength = 0
  let i = 0
  for (; true; ) {
    // console.warn('start-', i, s.length, s[i])
    if (i >= s.length) break
    let left = i
    let right = i
    while (s[right + 1] === s[i] && right <= s.length) {
    //   console.warn('central ++')
      right++
    }

    i = right + 1
    while (left >= 0 && right < s.length && s[left] === s[right]) {
    //   console.warn('central outer', s.slice(left, right + 1))
    //   console.warn('extend one place')
      left--
      right++
    }
    // console.warn('item', left, right, s.slice(left, right + 1))
    if (right - left > maxLength) {
      start = left + 1
      maxLength = right - left - 1
    }
  }
  return s.substr(start, maxLength)
}

module.exports = longestPalindrome
