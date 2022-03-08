const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (_req, res) => {
  const r = Math.random();
  setTimeout(() => {
    if (r < 0.1) {
      res.status(500).json({ message: "NOT OK" });
    } else {
      res.status(200).json({ message: "OK" });
    }
  }, 500);
});

app.listen(5000, () => console.log("Express server listening on port 5000!"));
