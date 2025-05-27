var findCircleNum = function(isConnected) {
    let r = 0, i = -1, visited = new Uint8Array(isConnected.length)
    const d = i => {
        visited[i] = 1
        for (let j = isConnected[i].length; j--;) 
            if (isConnected[i][j] && visited[j] === 0) d(j)
    }
    while (++i < isConnected.length) 
        if (visited[i] === 0) {
            r++
            d(i)
        }
    return r
};

