// Importer le module mongoose qui permet d'interagir avec MongoDB
const mongoose = require('mongoose');

// Destructuration pour extraire les objets Schema et model de mongoose
const { Schema, model } = mongoose;

// Définir le schéma (structure) d'un étudiant
const etudiantSchema = new Schema({
    // Champ prénom de type String, requis, avec une valeur par défaut "Non spécifié"
    prenom: {
        type: String,
        required: true,
        default: "Non spécifié"
    },
    // Champ nom de type String, requis, avec une valeur par défaut "Non spécifié"
    nom: {
        type: String,
        required: true,
        default: "Non spécifié"
    },
    // Champ tel de type String, requis, avec une valeur par défaut "Non spécifié"
    tel: {
        type: String,
        required: true,
        default: "Non spécifié"
    }
});

// Créer le modèle 'Etudiant' à partir du schéma défini
const Etudiant = model('Etudiant', etudiantSchema);

// Exporter le modèle pour pouvoir l'utiliser ailleurs dans l'application
module.exports = Etudiant;
