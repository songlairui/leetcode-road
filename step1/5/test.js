const main = require('./4')

console.warn('=', main(''))
console.warn('=', main('a'))
console.warn('=', main('cbba'))
console.warn('=', main('abacab'))
console.warn(
  '=',
  main(
    'abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababa'
  )
)

/*
a  b  c  c  b  d  e
-
   -
      -
         2
            1
               -
                  -

a  b  c  d  c  b  a
-
   -
      -
         -
            2
               1
                  0

a  b  a  c  a  b  c
-
   -
      0
         -
            0
            2
               1
                  3



*/
