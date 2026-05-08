const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const messageRoutes = require('./routes/routes.js');
const connectdb = require('./db/db.js');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', messageRoutes);

app.get("/", (req, res) => {
  res.send("hii there");
});

// The Start Logic
const start_server = async () => {
  try {
    // Fix 1: Removed the extra mongoose.connect() from here 
    // because connectdb() handles the connection logic.
    await connectdb();

    app.listen(3000, () => {
      console.log("It's running now on port 3000, boss");
    });
  } catch (err) {
    // Fix 2: Added a comma here
    console.log("error is:", err);
    // Fix 3: You cannot use 'res' here because this isn't inside a route!
  }
};

// Fix 4: Calling the function with the CORRECT name
start_server();