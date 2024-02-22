
    const dbInstance = require('../services/db')
    const jwt = require('jsonwebtoken');
    const dotenv = require('dotenv');
    const User = require('../class/utilisateur.class')

    dotenv.config({path : '.env.local'})

    const tokenKey = process.env.TOKEN_KEY;

    //Controlleur createUser
    exports.createUser = (req, res) => {
        let user = User.fromMap(req.body);
        const sql = 'INSERT INTO utilisateur (pseudonyme, mdp) VALUES (?, ?)';

        const values = [user.nom, user.mdp];

        dbInstance.query(sql, values, (err, result) => {
            if (err) {
                console.error("Erreur lors de l'insertion de l'utilisateur", err);

                res.status(500).json({ message: "Erreur lors de la création de l'utilisateur" });
            } else {
                user._id = result.insertId;
                res.status(201).json({ message: "Utilisateur créé avec succès !" });
            }
        });
    }
    

//Controller authentification
exports.authentification = (req, res) => {
    let user = User.fromMap(req.body);
    const sql = "SELECT * FROM utilisateurs WHERE pseudonyme = ? AND mdp = ?";
    const values = [user.pseudo, user.mdp];
  
    dbInstance.db.query(sql, values, (err, result) => {
  
      if (err) {
  
        res.status(500).json({ error: "Erreur lors de l'authentification" });
  
      } else if (result.length > 0) {
  
        const token = jwt.sign({ id: result[0].id }, tokenKey, { expiresIn: "24h" }, {algorithm: 'RS256'});
  
        res.status(200).json({ message: "Authentification réussie", Token: token, Utilisateur : user.toMap() });
  
      } else {
  
        res.status(401).json({ message: "Authentification échouée" });
  
      }
  
    });
  
  };