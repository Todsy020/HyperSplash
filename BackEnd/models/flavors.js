const mongoose = require('mongoose');

const flavorsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    subtitle: { type: String, required: true },
    description: { type: String, required: true },
    img1: { type: String, required: true },
    img2: { type: String, required: true },
    price: { type: Number, required: true },
    popular: { type: Boolean, required: true },
    quantity: { type: Number, required: true },
  },
  { collection: 'flavors' }
);

module.exports = mongoose.model('Flavors', flavorsSchema);
