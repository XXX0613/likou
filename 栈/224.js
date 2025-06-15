/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  let str = s.replaceAll(' ','')
  let sign = 1
  let ops = [1]
  let i = 0
  let res = 0
  while(i<str.length) {
    if(str[i] === '+'){
      sign = ops[ops.length-1]
    }else if(str[i] === '-'){
      sign = -ops[ops.length-1]
    }else if(str[i] === '(') {
      ops.push(sign)
    }else if(str[i] === ')') {
      ops.pop()
    }else {
      let num = '';
      while (i < str.length && !(isNaN(Number(str[i])))) {
          num+=str[i]
          i++;
      }
      i--
      res += sign * Number(num);
    }
    i++
  }
  return res
};

