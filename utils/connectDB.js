const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("connecting to database...");
    const response = await mongoose.connect(
      "mongodb+srv://Todo-App:asl1999@nodetuts.vwjd1w1.mongodb.net/todo-app"
    );
    console.log("database connected:", response.connection.name);
  } catch (e) {
    throw e;
  }
};

module.exports = connectDB;
