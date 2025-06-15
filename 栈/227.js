var calculate = function(s) {
    s = s.trim()
    const stack = []
    let preSign = '+', num = 0, n = s.length
    for (let i = 0; i < n; i++) {
        if (s[i] >= '0') num = num * 10 + (s[i] - '0')
        if (isNaN(Number(s[i])) || i === n - 1){
            switch (preSign) {
                case '+':
                    stack.push(num)
                    break;
    
                case '-':
                    stack.push(-num)
                    break;
    
                case '*':
                    stack.push(stack.pop() * num)
                    break;
    
                default:
                    stack.push(stack.pop() / num | 0)
                    break;
            }
            preSign = s[i];
            num = 0;
        }
    }
    return  stack.reduce((a,b) => { return a + b }, 0)
};

