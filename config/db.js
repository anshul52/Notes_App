const mongoose = require("mongoose");
const uri = process.env.MONGODB_URI;

async function dbConnect() {
  try {
    await mongoose.connect(uri);
    console.log("connected to mongodb");
  } catch (error) {
    console.error("db error : ", error);
  }
}

module.exports = dbConnect;
