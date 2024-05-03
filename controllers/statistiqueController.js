const db = require('../services/db');

const Statistique = require('../class/statistique.class');

// Controller getAllStatistiques

exports.getAllStatistiques = (req, res) => {


    const sql = 'SELECT * FROM statistiques';

    const dbInstance = db.getInstance(); // Obtenir une instance de la classe Database

    dbInstance.query(sql, (err, result) => {
        if (err) {
            console.error("Erreur lors de la récupération des statistiques", err);
            return res.status(500).json({ message: "Erreur lors de la récupération des statistiques" });
        } else {
            return res.status(200).json(result);
        }
    });
}

// Controller updateStatistique
exports.updateStatistique = (req, res) => {
    let statistique = Statistique.fromMap(req.body);
    console.log(statistique);
    const sql = 'UPDATE statistiques SET personnes = ? , maraudes = ?, preservatifs = ? WHERE id = ?';
    const values = [statistique.personnes, statistique.maraudes, statistique.preservatifs, req.params.id];

    const dbInstance = db.getInstance(); // Obtenir une instance de la classe Database

    dbInstance.query(sql, values, (err, result) => {
        if (err) {
            console.error("Erreur lors de la mise à jour de la statistique", err);
            return res.status(500).json({ message: "Erreur lors de la mise à jour de la statistique" });
        } else {
            return res.status(200).json({ message: "Statistique mise à jour avec succès !" });
        }
    });
}

// Controller createStatistique

// exports.createStatistique = (req, res) => {

//     let statistique = Statistique.fromMap(req.body);
//     const sql = 'INSERT INTO statistiques (personnes, maraudes, preservatifs) VALUES (?, ?, ?)';
//     const values = [statistique.personnes, statistique.maraudes, statistique.preservatifs];

//     const dbInstance = db.getInstance(); // Obtenir une instance de la classe Database

//     dbInstance.query(sql, values, (err, result) => {
//         if (err) {
//             console.error("Erreur lors de l'insertion de la statistique", err);
//             return res.status(500).json({ message: "Erreur lors de la création de la statistique" });
//         } else {
//             statistique._id = result.insertId;
//             return res.status(201).json({ message: "Statistique créée avec succès !" });
//         }
//     });
// }