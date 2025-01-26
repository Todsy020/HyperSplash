const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
require('dotenv').config();

// Middleware pour CORS
app.use(cors());

// Import des routes
const mainRoutes = require('./routes/mainRoutes');
const faqRoutes = require('./routes/faqRoutes');

// URI de connexion MongoDB Atlas
const mongoUri = process.env.MONGODB_URI;

// Fonction pour se connecter à MongoDB Atlas avec Mongoose
const connectDB = async () => {
  try {
    // Connexion avec Mongoose
    await mongoose.connect(mongoUri);
    console.log('Successfully connected to MongoDB Atlas');

    // Utilisation des routes
    app.use(mainRoutes);
    app.use(faqRoutes);
  } catch (err) {
    console.error('Error connecting to MongoDB Atlas:', err);
  }
};

// Fonction de ping pour vérifier que la connexion fonctionne
const pingAtlas = async () => {
  const client = new MongoClient(mongoUri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  try {
    await client.connect();
    await client.db('admin').command({ ping: 1 });
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    );
    await client.close();
  } catch (err) {
    console.error('Error pinging MongoDB Atlas:', err);
  }
};

// Exécuter les fonctions
connectDB();
pingAtlas();

const port = process.env.PORT || 10000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
