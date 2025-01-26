const mongoose = require('mongoose');

const reviewsSchema = new mongoose.Schema(
  {
    img: { type: String, required: true },
    span: { type: String, required: true },
    comment: { type: String, required: true },
    stars: { type: String, required: true },
  },
  { collection: 'reviews' }
);

module.exports = mongoose.model('Reviews', reviewsSchema);
