const mongoose = require("mongoose")

 const connectToDatabase = async (dbUrl)=> {
    try {
      // Set up Mongoose connection options (optional)
      const dbOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      };
  
      // Establish the database connection
      await mongoose.connect(dbUrl, dbOptions);
  
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  }

  module.exports = {
    connectToDatabase
  }