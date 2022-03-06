// MODULE IMPORTS
const fs = require("fs");
const express = require("express");
const path = require("path");
const open = require("open");
const cors = require("cors");
const { getAdjacencyMatrix, getShortestPath } = require("./utils/router");

// CONSTANTS
const PORT = 3001;
const NAME_DATA = "data.json";
const PATH_DATA = path.join(__dirname, "data", NAME_DATA);
const DATA_JSON = JSON.parse(fs.readFileSync(PATH_DATA, "utf8"));
const PATH_HTML = path.join(__dirname, "views/index.html");
const { graph, keys, invs } = getAdjacencyMatrix(DATA_JSON);

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/bounds", (req, res) => {
    res.status(200).json(DATA_JSON.bounds);
});

app.get("/api/node", (req, res) => {
    res.status(200).json(DATA_JSON.node);
});

app.get("/api/way", (req, res) => {
    res.status(200).json(DATA_JSON.way);
});

app.post("/api/router", (req, res) => {
    try {
        const path = getShortestPath(
            graph,
            keys[req.body.src],
            keys[req.body.dst],
            graph.length
        ).map((i) => invs[i]);
        res.status(200).send({ path });
    } catch {
        res.status(400).send("BAD REQUEST");
    }
});

app.get("*", function (req, res) {
    res.sendFile(PATH_HTML, 404);
});

app.listen(PORT, () => {
    console.log("🚀 LISTENING AT http://127.0.0.1:3001 🚀");
    open(`http://127.0.0.1:${PORT}`);
});
