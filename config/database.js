const mongoose = require('mongoose');
// const logInfo = require('./log')
const connectDB = async () => {
  try {
    await mongoose.connect('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', {
     // useNewUrlParser: true,
      //useUnifiedTopology: true,
    });
    console.log('[INFO] Connected to MongoDB');
  } catch (error) {
    console.error('[ERROR] Error connecting to MongoDB:', error);
  }
};

module.exports = connectDB;