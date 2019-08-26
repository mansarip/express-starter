require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;
const { version } = require("./package");

app.get("/", (req, res) =>
  res.json({
    success: true,
    name: "API Server",
    version: version
  })
);

app.get("/user", (req, res) => require("./routes/user.get")(req, res));
app.put("/user", (req, res) => require("./routes/user.put")(req, res));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
