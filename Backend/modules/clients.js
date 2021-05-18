var mongoose = require('mongoose');

var ClientsSchema = new mongoose.Schema({

  firstName: {
    type: String,
    required: true
  },

  lastName: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
  },

  message: {
    type: String,
    required: true
  },
  
  createdAt: {
    type: String,
    default: Date.now()
  }

});


var Clients = mongoose.model('Clients', ClientsSchema);
module.exports = Clients;
