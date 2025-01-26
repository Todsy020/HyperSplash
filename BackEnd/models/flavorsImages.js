const mongoose = require('mongoose');

const flavorsImageSchema = new mongoose.Schema(
  {
    img: { type: String, required: true },
  },
  { collection: 'flavorsImages' }
);

module.exports = mongoose.model('FlavorsImages', flavorsImageSchema);
