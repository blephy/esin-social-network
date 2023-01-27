const express = require("express");
const app = express();
const { readFileSync } = require("fs");
const { join } = require("path");

const cwd = process.cwd();
const dataFolder = join(cwd, "api", "data");

app.get("/users", function (req, res) {
  const users = readFileSync(join(dataFolder, "users.json"), {
    encoding: "utf8",
  });

  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200);
  res.json(JSON.parse(users));
});

app.listen(5000, () => {
  console.log("listening on port 5000");
});
