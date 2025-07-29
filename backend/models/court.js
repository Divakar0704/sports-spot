// backend/models/Court.js
const mongoose = require('mongoose');

const courtSchema = new mongoose.Schema({
  name: String,
  location: String,
  type: String,
  pricePerHour: Number,
  image: String,
  rating: Number,
  features: [String],
});

module.exports = mongoose.model('Court', courtSchema);
