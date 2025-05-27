var findRedundantConnection = function(edges) {
    const u = new UnionFind(edges.length + 1)
    for (let i = 0; i < edges.length; i++) {
        const rootX = u.find(edges[i][0]), rootY = u.find(edges[i][1])
        if (rootX === rootY) return edges[i]
        else u.union(rootX, rootY)
    }
};
class UnionFind { // 并查集类
    constructor (n) {
        this.parents = new Uint16Array(n)
        while (n--) this.parents[n] = n
    }
    union (rootX, rootY) {
       this.parents[rootX] = rootY
    }
    find (x) {
        while (x !== this.parents[x]) x = this.parents[x]
        return x
    }
}

