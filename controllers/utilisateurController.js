const db = require('../services/db');

const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const User = require('../class/utilisateur.class');

dotenv.config({path : '.env.local'});
const tokenKey = process.env.TOKEN_KEY;

// Controller createUser
exports.createUser = (req, res) => {
        let user = User.fromMap(req.body);
        const sql = 'INSERT INTO utilisateur (pseudonyme, mdp) VALUES (?, ?)';
    const values = [user.nom, user.mdp];

    const dbInstance = db.getInstance(); // Obtenir une instance de la classe Database

    dbInstance.query(sql, values, (err, result) => {
        if (err) {
            console.error("Erreur lors de l'insertion de l'utilisateur", err);
            return res.status(500).json({ message: "Erreur lors de la création de l'utilisateur" });
        } else {
            user._id = result.insertId;
            return res.status(201).json({ message: "Utilisateur créé avec succès !" });
        }
    });
};

// Controller authentification
exports.authentification = (req, res) => {
    let user = User.fromMap(req.body);
    const sql = "SELECT * FROM utilisateurs WHERE pseudonyme = ? AND mdp = ?";
    const values = [user.pseudonyme, user.mdp];
    const dbInstance = db.getInstance(); // Obtenir une instance de la classe Database

    dbInstance.query(sql, values, (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Erreur lors de l'authentification" });
        } else if (result.length > 0) {
            const token = jwt.sign({ id: result[0].id, pseudonyme: result[0].pseudonyme}, tokenKey, { expiresIn: "24h" }, { algorithm: 'RS256' });
            return res.status(200).json({ message: "Authentification réussie", Token: token });
        } else {
            return res.status(401).json({ message: "Authentification échouée" });
        }
    });
};

//Controller getAllUsers
exports.getAllUsers = (req, res) => {
    const sql = 'SELECT * FROM utilisateurs';
    const dbInstance = db.getInstance(); // Obtenir une instance de la classe Database

    dbInstance.query(sql, (err, result) => {
        if (err) {
            console.error("Erreur lors de la récupération des utilisateurs", err);
            return res.status(500).json({ message: "Erreur lors de la récupération des utilisateurs" });
        } else {
            return res.status(200).json(result);
        }
    });
};
