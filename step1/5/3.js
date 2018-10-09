/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let [p, w] = [0, 0]
  const length = s.length
  for (let i = 0; i < s.length; i++) {
    console.warn('----|||---')
    let central = i
    // TODO 根据 d 提前比较

    // TODO 从central开始到头和尾进行遍历比较
    let d = 1
    for (; true; d++) {
      console.warn('-------')
      const [a, b] = [central - d, central + d]
      if (s[a] !== s[b] || a < 0 || b > length) {
        d -= 1
        break
      }
    }
    if (d > w) {
      console.warn(central, d, p, w)
      w = d
      p = central
    }
    const halfCentral = i - 0.5
    if (halfCentral < 0) continue
    let e = 0.5
    for (; true; e++) {
      console.warn('-------======')
      const [m, n] = [halfCentral - e, halfCentral + e]
      if (s[m] !== s[n] || m < 0 || n > length) {
        e -= 1
        break
      }
    }
    if (e > w) {
      console.warn(halfCentral, e, p, w)
      w = e
      p = halfCentral
    }
  }
  return s.slice(p - w, p + w + 1)
}

module.exports = longestPalindrome

// draft

// start   end     center      length
// 0       0       0            0
// 0       1       0.5          1
// 0       2       1            2
// 1       2       1.5          1
// 1       3       2            2

// not equal
// start   end     center      next
// 0       1   x   0.5         1 ~ 0 (i - 1 - j - 1)

// 0, 1, 2, 3
// 0   1
//  0.5
