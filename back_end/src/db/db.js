
const mongoose = require('mongoose');
const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONgo_uRI);
    console.log("connected sirrrr!!!");
  }

  catch (err) {
    console.error("Database connection failed:", err.message);
    process.exit(1);
  }
}

module.exports = connectdb;