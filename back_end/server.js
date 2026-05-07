const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const connectdb = require('./db/db.js')
require('dotenv').config();

app.use(cors())

app.use(express.json());

connectdb()
mongoose.connect(process.env.mongo_uri)
  .then(() => console.log("connected boss"))
  .catch((err) => console.log("this is error", err));

app.get("/", (req, res) => {
  res.send("hii there")
})
app.listen(3000, () => {
  console.log("running onport 3k")
});