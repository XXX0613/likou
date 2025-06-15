// Floyd
// 最短路类型：每对结点之间的最短路
// 作用于任意图
// 时间复杂度 O(n ^ 3) 空间复杂度 O(n ^ 2)
var networkDelayTime = function(times, n, k) {
    // 当 x 与 y 没有直接相连的边的时候边权为 infinity
    const graph = Array.from(new Array(n + 1), () => new Array(n + 1).fill(10001));
    // 当 x = y 的时候边权为零
    // 因为到本身的距离为零
    for(let i = 0; i <= n; i++) {
        graph[i][i] = 0;
    }
    // 该题为有向图故存储单边
    for(const edge of times) {
        graph[edge[0]][edge[1]] = edge[2];
    }
    // Floyd 三重循环
    for(let k = 1; k <= n; k++) {
        for(let i = 1; i <= n; i++) {
            for(let j = 1; j <= n; j++) {
                graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
            }
        }
    }
    let res = 0;
    for(let i = 1; i <= n; i++) {
        if(i != k) {
            if(graph[k][i] == 10001) return -1;
            res = Math.max(res, graph[k][i]);
        }
    }
    return res;
};

