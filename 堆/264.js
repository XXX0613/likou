/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    const dp = new Array(n).fill(0);  // dp[i] 存储第 i+1 个丑数
    dp[0] = 1;                        // 第一个丑数是 1

    let p2 = 0, p3 = 0, p5 = 0;       // 三个指针分别指向 dp 的索引

    for (let i = 1; i < n; i++) {
        const next2 = dp[p2] * 2;
        const next3 = dp[p3] * 3;
        const next5 = dp[p5] * 5;

        // 取最小值作为下一个丑数
        const nextUgly = Math.min(next2, next3, next5);
        dp[i] = nextUgly;

        // 如果是哪个指针乘出来的，就移动它
        if (nextUgly === next2) p2++;
        if (nextUgly === next3) p3++;
        if (nextUgly === next5) p5++;
    }

    return dp[n - 1];  // 返回第 n 个丑数
};

