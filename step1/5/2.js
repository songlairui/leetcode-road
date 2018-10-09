/** 两层遍历
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let mark = [0]
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j <= i; j++) {
      let central = i + j
      console.log(`------\n${j} - ${i} / ${s.length}`)
      if (s[i] !== s[j]) {
        console.log('xxx', i, j, mark[central], 'set', central)
        // 最大长度设置为当前的长度 - 2
        if (mark[central] === undefined) {
          mark[central] = i - j - 2
        } else {
          mark[central] = Math.min(i - j - 2, mark[central])
        }
      } else {
        console.log('===', i, j, mark[central])
        if (mark[central] === undefined) {
          mark[central] = Math.min(central, s.length * 2 - 2 - central)
        }
      }
      console.log(mark[central] + '\n')
    }
  }
  const length = Math.max(...mark)
  const start = (mark.indexOf(length) - length) / 2
  console.log(JSON.stringify(mark), start, length)
  return s.slice(start, length + start + 1)
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
