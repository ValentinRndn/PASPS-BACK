const db = require('../services/db');  

const Structure = require('../class/structure.class');

// Controller getStructureByCategorie
exports.getStructureByCategorie = (req, res) => {
    const sql = 'SELECT * FROM structures WHERE categorie = ?';
    const values = [req.params.categorie];
    console.log(values);
    const dbInstance = db.getInstance(); // Obtenir une instance de la classe Database

    dbInstance.query(sql, values, (err, result) => {
        if (err) {
            console.error("Erreur lors de la récupération des structures", err);
            return res.status(500).json({ message: "Erreur lors de la récupération des structures" });
        } else {
            const structures = result.map(structure => new Structure(structure.id, structure.antenne, structure.categorie));
            return res.status(200).json(structures);
        }
    });
}

