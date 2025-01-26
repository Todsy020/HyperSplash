const express = require('express');
const router = express.Router();
const Flavors = require('../models/flavors');
const Reviews = require('../models/reviews');
const FlavorsImages = require('../models/flavorsImages');

router.get('/api/mainpage', async (req, res) => {
  try {
    const flavors = await Flavors.find();
    const reviews = await Reviews.find();
    const flavorsImages = await FlavorsImages.find();

    // Regroupe toutes les données dans un seul objet
    const responseData = {
      flavors,
      reviews,
      flavorsImages,
    };

    // Renvoie toutes les données en une seule fois
    res.json(responseData);
  } catch (err) {
    console.error('Error:', err);
    res
      .status(500)
      .json({ error: 'Erreur lors de la récupération des données' });
  }
});

module.exports = router;
