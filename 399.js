var calcEquation = function(equations, values, queries) {
    grah = Object.create(null), visited = new Set
    for (let i = 0; i < values.length; i++) {
        const x = equations[i][0], y = equations[i][1], value = values[i]
        if (!grah[x]) grah[x] = Object.create(null)
        grah[x][y] = value
        if (!grah[y]) grah[y] = Object.create(null)
        grah[y][x] = 1 / value
    }
    return queries.map(([x, y]) => d(x, y))
};
let grah, visited, d = (x, y) => {
    if (!grah[x]) return -1
    if (grah[x][y]) return grah[x][y]
    let k = Object.keys(grah[x]), i = -1
    while (++i < k.length) 
        if(!visited.has(k[i])) {
            visited.add(k[i])
            const t = d(k[i], y)
            visited.delete(k[i])
            if(t !== -1) return grah[x][k[i]] * t
        }
    return -1;
}

