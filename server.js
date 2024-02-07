// Importer les bibliothèques nécessaires
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const Etudiant = require('./models/User'); // Import du modèle Etudiant depuis ./models/User
const bodyParser = require('body-parser');
const server = express();
server.use(bodyParser.json()); // Utilisation de body-parser pour analyser les corps de requête JSON

// Charger les variables d'environnement depuis le fichier .env dans le dossier config
dotenv.config({ path: path.join(__dirname, 'config', '.env') });

// Stocker le port du serveur dans une variable
const port = process.env.PORT;

// Stocker l'URI de la base de données MongoDB Atlas dans une variable
const urlDatabase = process.env.MONGO_URI;

// Se connecter à la base de données en utilisant mongoose
mongoose.connect(urlDatabase)
    .then(() => {
        console.log('La base de données a été connectée avec succès.');

        // Démarrer le serveur express
        server.listen(port, () => {
            console.log(`Le serveur est en cours d'exécution sur le port ${port}`);
        });
    })
    .catch((err) => {
        console.error(`Erreur lors de la connexion à la base de données : ${err}`);
    });

// Route GET pour récupérer la liste des étudiants
server.get('/', async (req, res) => {
    try {
        const listEtudiants = await Etudiant.find(); 
        res.json(listEtudiants);
        console.log("Données récupérées avec succès");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route POST pour ajouter un nouvel étudiant
server.post('/etudiants/add', async (req, res) => {
    try {
        const addEtudiantData = new Etudiant(req.body);
        const addEtudiant = await addEtudiantData.save(); 
        console.log('Étudiant enregistré avec succès :', addEtudiant);
        res.status(201).json(addEtudiant); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route PUT pour modifier les données d'un étudiant
server.put('/etudiants/edit/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        console.log('Données de mise à jour reçues :', updatedData);
        const editedEtudiant = await Etudiant.findByIdAndUpdate(id, updatedData, { new: true }); 
        console.log('Étudiant modifié avec succès :', editedEtudiant);
        res.status(200).json(editedEtudiant);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route DELETE pour supprimer un étudiant
server.delete('/etudiants/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deletedEtudiant = await Etudiant.findByIdAndDelete(id);
        console.log('Étudiant supprimé avec succès :', deletedEtudiant);
        res.status(200).json(deletedEtudiant); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
