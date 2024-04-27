const db = require('../services/db');

// const jwt = require('jsonwebtoken');
// const dotenv = require('dotenv');
// const User = require('../class/utilisateur.class');
const Member = require('../class/member.class');
// dotenv.config({path : '.env.local'});
// const tokenKey = process.env.TOKEN_KEY;

// Controller createUser
// exports.createUser = (req, res) => {
//     let user = User.fromMap(req.body);
//     const sql = 'INSERT INTO utilisateur (pseudonyme, mdp) VALUES (?, ?)';
//     const values = [user.nom, user.mdp];

//     const dbInstance = db.getInstance(); // Obtenir une instance de la classe Database

//     dbInstance.query(sql, values, (err, result) => {
//         if (err) {
//             console.error("Erreur lors de l'insertion de l'utilisateur", err);
//             return res.status(500).json({ message: "Erreur lors de la création de l'utilisateur" });
//         } else {
//             user._id = result.insertId;
//             return res.status(201).json({ message: "Utilisateur créé avec succès !" });
//         }
//     });
// };

// Controller getAllMembers

exports.getAllMembers = (req, res) => {
    const sql = 'SELECT * FROM membres';
    const dbInstance = db.getInstance(); // Obtenir une instance de la classe Database

    dbInstance.query(sql, (err, result) => {
        if (err) {
            console.error("Erreur lors de la récupération des membres", err);
            return res.status(500).json({ message: "Erreur lors de la récupération des membres" });
        } else {
            const membres = result.map(membre => new Member(membre.id, membre.nom, membre.prenom, membre.role, membre.description));
            return res.status(200).json(membres);
        }
    });
}

exports.createMember = (req, res) => {
    let member = Member.fromMap(req.body);
    const sql = 'INSERT INTO membres (nom, prenom, role) VALUES (?, ?, ?)';
    const values = [member.nom, member.prenom, member.role];

    const dbInstance = db.getInstance(); // Obtenir une instance de la classe Database

    dbInstance.query(sql, values, (err, result) => {
        if (err) {
            console.error("Erreur lors de l'insertion du membre", err);
            return res.status(500).json({ message: "Erreur lors de la création du membre" });
        } else {
            member._id = result.insertId;
            return res.status(201).json({ message: "Membre créé avec succès !" });
        }
    });
}