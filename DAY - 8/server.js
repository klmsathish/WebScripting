const http = require("http");
const express = require("express");

const app = express();

app.get("/welcome/:message", (req, res, next) => {
  if (req.params.message === "happy") {
    res.status(200).json({
      message: "Successfull",
      word: req.params.message,
    });
  } else {
    res.status(400).json({ message: "Bad request" });
  }
});

app.post("/post", (req, res) => {
  res.status(200).json({
    message: "You are posting",
  });
});

app.patch("/patch", (req, res) => {
  res.status(200).json({
    message: "You are patching",
  });
});
app.delete("/delete", (req, res) => {
  res.status(200).json({
    message: "your are deleting",
  });
});

app.use((req, res) => {
  res.status(404).json({
    message: "Page Not found",
  });
});

const server = http.createServer(app);
const port = process.env.PORT || 3200;
server.listen(port);