const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

const { MONGODB_URI } = process.env;

const uri = `${MONGODB_URI}`;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  autoIndex: false, // Don't build indexes
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0,
  connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4 // Use IPv4, skip trying IPv6
};

const connect = async () => {
  try {
    await mongoose.connect(uri, options);
    console.log("Connected to Mongo DB");
  } catch (error) {
    console.error(error);
  }
};

module.exports = { connect };
