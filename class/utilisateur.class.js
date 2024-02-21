class Utilisateur {
    constructor(id, pseudonyme, mdp) {
        this._id =  id;
        this._pseudonyme = pseudonyme;
        this._mdp = mdp;
    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }


    get pseudonyme() {
        return this._pseudonyme;
    }

    set pseudonyme(value) {
        this._pseudonyme = value;
    }

    get mdp() {
        return this._mdp;
    }


    set mdp(value) {
        this._mdp = value;
    }

    
}