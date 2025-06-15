/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    const sLength = s.length;
    if(sLength === 1) return s; // 长度为1，直接返回本身
    const map = new Map();
    // 对每个字符串进行计数
    for(let i=0; i< s.length; i++){
      map.set(s[i], (map.get(s[i]) || 0)+1);
    }
    // 对字符串进行排序，生成新的排序好的字符串，最大的排在最前面
    const array = Array.from(map);
    array.sort((a, b) => b[1] - a[1]);
    const length = array[0][1];
    if(length > sLength - length + 1) return '';
    let sSorted = "";
    for(let i=0; i < array.length; i++){
        for(let j=0; j < array[i][1]; j++){
            sSorted = `${sSorted}${array[i][0]}`;
        }
    }
    // 以重复率最大值对排序好的字符串进行分隔
    const arrayStr = [];
    for(let i=0; i < sLength;){
        arrayStr.push(sSorted.slice(i,i+ length));
        i = i + length;
    }
    // 重组字符串，每次按顺序取出一个字符。
    let result = '';
    let arrayLength = arrayStr.length;
    for(let i=0; i< length; i++){
        for(let j=0; j < arrayLength; j++){
            if(arrayStr[j][i]){
                result = `${result}${arrayStr[j][i]}`
            }else{
                arrayLength --; // 优化数组长度，说明这一个字符串已经取完了。下次无须再取
            }
        }
    }
    return result;
 };

