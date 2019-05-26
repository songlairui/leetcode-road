var isPalindrome = function(x) {
  var str = x.toString()

  for (i = 0; i <= str.length / 2; i++) {
    console.group('--for--')
    console.info('idx:', i, str.length - 1 - i)
    console.info('val:', str[i], str[str.length - 1 - i])
    if (str[i] !== str[str.length - 1 - i]) {
      console.groupEnd()
      return false
    }
    console.groupEnd()
  }
  return true
}

module.exports = isPalindrome
