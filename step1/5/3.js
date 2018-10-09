/** 根据中间位置
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let p = 0
  let w = 0
  const length = s.length
  for (let i = 0; i < length; i++) {
    // console.warn('-------')
    let central = i
    let halfCentral = i - 0.5
    // TODO 根据 d 提前比较

    let d = 1
    let e = 0.5
    const [a0, b0] = [central - w - 1, central + w + 1]
    if (s[a0] === s[b0]) {
      for (; true; d++) {
        // console.warn('---=---')

        const [a, b] = [central - d, central + d]
        if (s[a] !== s[b] || a < 0 || b > length) {
          break
        }
      }
    }
    d -= 1

    const [m0, n0] = [halfCentral - w - 1, halfCentral + w + 1]
    if (s[m0] === s[n0]) {
      for (; true; e++) {
        // console.warn('---x---')
        const [m, n] = [halfCentral - e, halfCentral + e]
        if (s[m] !== s[n] || m < 0 || n > length) {
          break
        }
      }
    }
    e -= 1
    // console.warn(d, e, w, p, central, halfCentral)
    if (d > w) {
      w = d
      p = central
    }
    if (e > w) {
      w = e
      p = halfCentral
    }
  }
  return s.slice(p - w, p + w + 1)
}

module.exports = longestPalindrome
