const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { readFileSync, writeFileSync } = require("fs");
const { join } = require("path");
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
const cwd = process.cwd();
const dataFolder = join(cwd, "api", "data");

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/users", function (req, res) {
  setTimeout(() => {
    const users = readFileSync(join(dataFolder, "users.json"), {
      encoding: "utf8",
    });

    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200);
    return res.json(JSON.parse(users));
  }, 2000);
});

app.post("/user", function (req, res) {
  setTimeout(() => {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");

    const users = readFileSync(join(dataFolder, "users.json"), {
      encoding: "utf8",
    });
    const newUser = req.body;
    console.log(req.body);
    const { id } = newUser;

    if (!id) {
      res.status(400);
      res.json({ error: "missing id" });
    }

    const newUsers = JSON.parse(users).map((user) => {
      if (user.id === id) {
        return newUser;
      }
      return user;
    });

    writeFileSync(join(dataFolder, "users.json"), JSON.stringify(newUsers));

    res.status(201);
    res.json(newUsers);
  }, 2000);
});

app.listen(5000, () => {
  console.log("listening on port 5000");
});
