class Member {
    constructor(id, nom, prenom, role) {
        this._id = id;
        this._nom = nom;
        this._prenom = prenom;
        this._role = role;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get nom() {
        return this._nom;
    }

    set nom(value) {
        this._nom = value;
    }

    get prenom() {
        return this._prenom;
    }

    set prenom(value) {
        this._prenom = value;
    }

    get role() {
        return this._role;
    }

    set role(value) {
        this._role = value;
    }


    toMap() {
        return {
            id: this._id,
            nom: this._nom,
            prenom: this._prenom,
            role: this._role,
        };
    }
    
    static fromMap(map) {
        return new Member(map.id, map.nom, map.prenom, map.role);
    }
}



module.exports = Member;