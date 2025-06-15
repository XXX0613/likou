/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const n = s.length
    const vector = []
    if (s[0] === ')' || s[0] === '}' || s[0] === ']') {
        return false
    }
    for (let i = 0; i < n; i++) {
        vector.push(s[i])
        // 遇到右括号，进行匹配
        if (s[i] === ')' && vector[vector.length - 2] === '(') {
            vector.pop()
            vector.pop()
        }
        if (s[i] === '}' && vector[vector.length - 2] === '{') {
            vector.pop()
            vector.pop()
        }
        if (s[i] === ']' && vector[vector.length - 2] === '[') {
            vector.pop()
            vector.pop()
        }

    }
    if (vector.length === 0) {
        return true
    } else {
        return false
    }
};

