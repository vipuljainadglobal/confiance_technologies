const mongoose = require("mongoose");

const URI = "mongodb+srv://confiance_technologies:Jain7503560505@cluster0.syix6.mongodb.net/confiance-technologies?retryWrites=true&w=majority";

const connectdb = async () => {
  await mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });

  console.log("db connected");
};

module.exports = connectdb;