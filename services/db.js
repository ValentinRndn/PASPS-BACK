const mysql = require('mysql2');

class Database {
    constructor() {
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'admin',
            password: '123',
            database: 'pasps',
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
}

module.exports = Database;
