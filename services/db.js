const mysql = require('mysql2');

class Database {
    constructor() {
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'superadmin',
            password: '1234',
            database: 'papsp',
        });
        this.connect();
    }

    connect() {
        this.connection.connect((err) => {
            if(err) {
                console.log('Erreur de connexion à la base de données');
                return;
            }
            console.log('Connexion à la base de données réussie');
        }
    )};

    
    static getInstance() {
        if (!this.instance) {  
            this.instance = new Database();
        }
        return this.instance;
    }

    query(sql, values, callback) {
        this.connection.query(sql, values, callback);
    }
}

module.exports = Database;
