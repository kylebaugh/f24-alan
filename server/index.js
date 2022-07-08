require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");


const { createLog } = require("./controller.js");


const app = express();
app.use(cors());


app.post("/api/log", createLog);



app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../home.html"));
});

app.get("/css", (req, res) => {
  res.sendFile(path.join(__dirname, "../home.css"));
});

app.get("/js", (req, res) => {
  res.sendFile(path.join(__dirname, "../main.js"));
});

const port = process.env.PORT || 5432;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
