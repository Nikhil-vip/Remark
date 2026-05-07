
const mogoose = require('mongoose');
const connectdb = async () => {
  try {
    await mongoose.connect(process.env.mongo_uri);
    console.log("connected sirrrr!!!");
  }

  catch (err) {
    console.error("Database connection failed:", err.message);
    process.exit(1);
  }
}

module.exports = connectdb;