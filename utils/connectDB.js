const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("connecting to database...");
    const response = await mongoose.connect(
      "mongodb://localhost:27017/todo-app"
    );
    console.log("database connected:", response.connection.name);
  } catch (e) {
    throw e;
  }
};

module.exports = connectDB;
