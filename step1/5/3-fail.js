/** 
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let p = 0
    let w = 0
    const length = s.length
    for (let i = 0; i < length; i++) {
      console.warn('----|||---')
      let central = i
      // TODO 根据 d 提前比较
  
      let d = 1
      const chunk = Math.min(central, length - central)
      let dd = chunk,
        ee = chunk - 0.5,
        cc,
        ww
      let ii = 0
      for (; true; ii++) {
        d += ii
        const [l, m, n] = [central - d, central + d - 1, central + d]
        if (s[l] !== s[n] && dd === chunk) {
          dd = d - 1
        }
        if (s[l] !== s[m] && ee === chunk - 0.5) {
          ee = d - 1 - 0.5
        }
        if (l < 0 || m > length) break
      }
  
      console.warn({ dd, ee, ii, central })
      if (dd > ee) {
        cc = central
        ww = dd
      } else {
        cc = central - 0.5
        ww = ee
      }
  
      if (ww > w) {
        w = ww
        p = cc
      }
    }
    console.warn(s, p, w, p - w + 1, p + w)
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
  