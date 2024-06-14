const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // useFindAndModify: true,
      // useUnifiedTopology:true
    });
    console.log(`MongoDb connnected: ${conn.connection.host} `.green.bold);
  } catch (error) {
    console.log(`error: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
