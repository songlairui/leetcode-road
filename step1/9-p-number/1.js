var isPalindrome = function(x) {
  var str = x.toString()
  if (str.length < 2) {
    return true
  }
  var result = true
  for (i = 0; i <= str.length / 2; i++) {
    console.group('--for--')
    console.info('idx:', i, str.length - 1 - i)
    console.info('val:', str[i], str[str.length - 1 - i])
    if (str[i] !== str[str.length - 1 - i]) {
      result = false
      console.groupEnd()

      break
    }
    console.groupEnd()
  }
  return result
}

module.exports = isPalindrome
