/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const names = path.split("/"); // 以 '/' 分割路径
    const stack = []; // 栈用于存储有效路径名

    for (const name of names) { // 遍历路径片段
        // 注意这里不能改成 name === '..' && stack.length
        // 当此时的name为'..'且stack为空时，这个判断就不成立
        // 此时的'..'会转入下一个判断，接着'..'就入栈了
        if (name === "..") {  
            // 遇到 ".." 返回上一级目录（栈非空时弹出栈顶）
            if (stack.length) {
                stack.pop();
            }
        } else if (name.length && name !== ".") { 
            // 忽略空字符串 ""（由 "//" 产生）和 "."（表示当前目录）
            stack.push(name); // 其余为有效目录，压入栈
        }
    }

    return "/" + stack.join("/"); // 以 "/" 拼接简化后的路径
};

