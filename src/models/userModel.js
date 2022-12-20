const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userModel = new Schema({
  firstname: {
    type: String,
    require: true,
  },
  lastname: String,
  gender: {
    type: String,
    enum: ['Male', 'Female'],
    default:'Male'
  },
  birthDay: Date,
  role: {
    type: String,
    enum:['User','Admin'],
    default:'User',
    },
    phone: String,
});

module.exports = mongoose.model('user', userModel);
