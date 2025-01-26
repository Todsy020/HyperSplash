const mongoose = require('mongoose');

const faqSchema = new mongoose.Schema(
  {
    question: { type: String, required: true },
    answer: { type: String, required: true },
  },
  { collection: 'faq' }
);

module.exports = mongoose.model('Faq', faqSchema);
