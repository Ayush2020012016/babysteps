const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("your server is running !");
});

app.listen("4000", () => {
  console.log("your port started at port 4000");
});
