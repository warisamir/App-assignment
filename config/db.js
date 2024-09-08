const mongoose = require('mongoose');
// const config = require('config');
// const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://warisamir1918:waris1918@cluster0.zji50e8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      }
    );

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
