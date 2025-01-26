const express = require('express');
const router = express.Router();
const Faq = require('../models/faq');

router.get('/api/faq', async (req, res) => {
  try {
    const faq = await Faq.find();
    res.json(faq);
  } catch (err) {
    res
      .status(500)
      .json({ error: 'Erreur lors de la récupération des flavors' });
  }
});

module.exports = router;
