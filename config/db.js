const mongoose = require("mongoose");
const uri = process.env.MONGODB_URI;
// ("mongodb+srv://anshulgupta2028:n8A8CdHV7PA4TPYx@notesappcluster.ppx8t.mongodb.net/?retryWrites=true&w=majority&appName=NotesAppCluster");

async function dbConnect() {
  try {
    await mongoose.connect(uri);
    console.log("connected to mongodb");
  } catch (error) {
    console.error("db error : ", error);
  }
}

module.exports = dbConnect;
