function getKeys(arr) {
    const keys = {};
    const invs = {};
    arr.forEach(({ id }, i) => {
        keys[id] = +i;
        invs[+i] = id;
    });
    return { keys, invs };
}

function getAdjacencyMatrix({ node, way }) {
    const N = node.length;
    const { keys, invs } = getKeys(node);
    const graph = [];
    for (let i = 0; i < N; i++) {
        graph.push([]);
    }
    way.forEach(({ nd }) => {
        for (let i = 0; i < nd.length - 1; i++) {
            const j = keys[nd[i]];
            const k = keys[nd[i + 1]];
            graph[j].push(k);
            graph[k].push(j);
        }
    });
    return { graph, keys, invs };
}

function BFS(adj, src, dest, v, pred, dist) {
    const queue = [];
    const visited = [];
    for (let i = 0; i < v; i++) {
        visited[i] = false;
        dist[i] = Number.MAX_VALUE;
        pred[i] = -1;
    }

    visited[src] = true;
    dist[src] = 0;
    queue.push(src);

    while (queue.length > 0) {
        const u = queue.shift();
        for (let i = 0; i < adj[u].length; i++) {
            const idx = adj[u][i];
            if (visited[idx] === false) {
                visited[idx] = true;
                dist[idx] = dist[u] + 1;
                pred[idx] = u;
                queue.push(idx);
                if (idx === dest) {
                    return true;
                }
            }
        }
    }

    return false;
}

function getShortestPath(adj, s, dest, v) {
    const pred = Array(v).fill(-1);
    const dist = Array(v).fill(Number.MAX_VALUE);
    if (!BFS(adj, s, dest, v, pred, dist)) {
        return [];
    }

    const path = [];
    let crawl = dest;
    path.push(crawl);
    while (pred[crawl] !== -1) {
        path.push(pred[crawl]);
        crawl = pred[crawl];
    }
    return path.reverse();
}

module.exports = {
    getAdjacencyMatrix,
    getShortestPath,
};
