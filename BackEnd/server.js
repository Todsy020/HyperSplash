const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();

// Middleware pour CORS
app.use(cors());

// Import des routes
const mainRoutes = require('./routes/mainRoutes');
const faqRoutes = require('./routes/faqRoutes');

// URI de connexion MongoDB Atlas
const uri =
  'mongodb+srv://theodoredeconinck:mGxZbVaKtHE4ZVgv@ovbcluster.xqq8l.mongodb.net/?retryWrites=true&w=majority&appName=OVBCluster';

// Fonction pour se connecter à MongoDB Atlas avec Mongoose
const connectDB = async () => {
  try {
    // Connexion avec Mongoose
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
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
  const client = new MongoClient(uri, {
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

const port = process.env.PORT || 5000; // Si Heroku ne définit pas de port, utilise 5000 en local
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
