const mongoose = require('mongoose');

const CertificateShema = new mongoose.Schema({
  _id: { type: String, required: true },
  detail: { type: String, required: true },
  issued_date: { type: Date, required: true }
}, { timestamps: true, });

module.exports = mongoose.model('certificates', CertificateShema);