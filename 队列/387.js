/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    // 用一个 Map 来记录字符是否唯一
    const charMap = new Map();
    const chars = s.split(''); // 将字符串转为字符数组

    // 第一次遍历，更新字符的唯一性
    for (const c of chars) {
        charMap.set(c, !charMap.has(c));
    }

    // 第二次遍历，根据 Map 找到第一个唯一字符的索引
    for (let i = 0; i < chars.length; i++) {
        if (charMap.get(chars[i])) {
            return i; // 返回第一个唯一字符的索引
        }
    }

    // 如果没有找到唯一字符，返回 -1
    return -1;
};

