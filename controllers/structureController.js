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
            const structures = result.map(structure => new Structure(structure.id, structure.antenne, structure.adresse, structure.coos_gps, structure.departement, structure.telephone, structure.mail, structure.horaires_lundi, structure.horaires_mardi, structure.horaires_mercredi, structure.horaires_jeudi, structure.horaires_vendredi, structure.horaires_samedi, structure.horaires_dimanche, structure.besoin, structure.categorie));

            return res.status(200).json(structures);
        }
    });
}

//Controller getAllStructures
exports.getAllStructures = (req, res) => {
    const sql = 'SELECT * FROM structures';
    const dbInstance = db.getInstance(); // Obtenir une instance de la classe Database

    dbInstance.query(sql, (err, result) => {
        if (err) {
            console.error("Erreur lors de la récupération des structures", err);
            return res.status(500).json({ message: "Erreur lors de la récupération des structures" });
        } else {
            const structures = result.map(structure => new Structure(structure.id, structure.antenne, structure.adresse, structure.coos_gps, structure.departement, structure.telephone, structure.mail, structure.horaires_lundi, structure.horaires_mardi, structure.horaires_mercredi, structure.horaires_jeudi, structure.horaires_vendredi, structure.horaires_samedi, structure.horaires_dimanche, structure.besoin, structure.categorie));

            return res.status(200).json(structures);
        }
    });const db = require('../services/db');  

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
                const structures = result.map(structure => new Structure(structure.id, structure.antenne, structure.adresse, structure.coos_gps, structure.departement, structure.telephone, structure.mail, structure.horaires_lundi, structure.horaires_mardi, structure.horaires_mercredi, structure.horaires_jeudi, structure.horaires_vendredi, structure.horaires_samedi, structure.horaires_dimanche, structure.besoin, structure.categorie));
    
                return res.status(200).json(structures);
            }
        });
    }
    
    //Controller getAllStructures
    exports.getAllStructures = (req, res) => {
        const sql = 'SELECT * FROM structures';
        const dbInstance = db.getInstance(); // Obtenir une instance de la classe Database
    
        dbInstance.query(sql, (err, result) => {
            if (err) {
                console.error("Erreur lors de la récupération des structures", err);
                return res.status(500).json({ message: "Erreur lors de la récupération des structures" });
            } else {
                const structures = result.map(structure => new Structure(structure.id, structure.antenne, structure.adresse, structure.coos_gps, structure.departement, structure.telephone, structure.mail, structure.horaires_lundi, structure.horaires_mardi, structure.horaires_mercredi, structure.horaires_jeudi, structure.horaires_vendredi, structure.horaires_samedi, structure.horaires_dimanche, structure.besoin, structure.categorie));
    
                return res.status(200).json(structures);
            }
        });
    }
    
}
