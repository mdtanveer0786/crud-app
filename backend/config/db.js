const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://mdtanweeralam0002:Mdtanveer0002@cluster0.fsr7nlh.mongodb.net/crud-app");
    console.log("MongoDB Connected");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;