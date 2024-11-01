const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

// refactor sesuai ECMAScript

// import express from "express";

// const app = express();

// app.get("/", (req, res) => {
//   res.send({ hi: "there" });
// });

// app.listen(5000);
