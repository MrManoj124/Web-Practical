const mongoose = require('mongoose');

const StudentShema = new mongoose.Schema({
  _id: { type: String, required: true },
  reg_no: { type: String, required: true },
  degree: { type: String, required: true },
  faculty: { type: String, required: true },
  firstname: { type: String },
  lastname: { type: String }
}, { timestamps: true, });

module.exports = mongoose.model('students', StudentShema);