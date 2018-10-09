/** 三层遍历
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let result = s[0] || ''
  let i = 0
  for (; i < s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (i - j <= result.length - 1) continue
      let flag = true
      for (let k = j; k < (i + j) / 2; k++) {
        let a = k
        let b = i + j - k
        if (s[a] !== s[b]) {
          flag = false
          break
        }
      }
      if (flag) {
        result = s.slice(j, i + 1)
      }
    }
  }
  return result
}

module.exports = longestPalindrome
