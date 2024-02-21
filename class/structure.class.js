class Structure {
    constructor(id, nom, adresse, coos_gps, departement, telephone, mail, horaires_lundi, horaires_mardi, horaires_mercredi, horaires_jeudi, horaires_vendredi, horaires_samedi, horaires_dimanche, besoin) {

        this._id = id;
        this._nom = nom;
        this._adresse = adresse;
        this._coos_gps = coos_gps;
        this._departement = departement;
        this._telephone = telephone;
        this._mail = mail;
        this._horaires_lundi = horaires_lundi;
        this._horaires_mardi = horaires_mardi;
        this._horaires_mercredi = horaires_mercredi;
        this._horaires_jeudi = horaires_jeudi;
        this._horaires_vendredi = horaires_vendredi;
        this._horaires_samedi = horaires_samedi;
        this._horaires_dimanche = horaires_dimanche;
        this._besoin = besoin;
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

    get adresse() {
        return this._adresse;
    }

    set adresse(value) {
        this._adresse = value;
    }

    get coos_gps() {
        return this._coos_gps;
    }

    set coos_gps(value) {
        this._coos_gps = value;
    }

    get departement() {
        return this._departement;
    }

    set departement(value) {
        this._departement = value;
    }

    get telephone() {
        return this._telephone;
    }

    set telephone(value) {
        this._telephone = value;
    }

    get mail() {
        return this._mail;
    }

    set mail(value) {
        this._mail = value;
    }

    get horaires_lundi() {
        return this._horaires_lundi;
    }

    set horaires_lundi(value) {
        this._horaires_lundi = value;
    }

    get horaires_mardi() {
        return this._horaires_mardi;
    }

    set horaires_mardi(value) {
        this._horaires_mardi = value;
    }

    get horaires_mercredi() {
        return this._horaires_mercredi;
    }

    set horaires_mercredi(value) {
        this._horaires_mercredi = value;
    }

    get horaires_jeudi() {
        return this._horaires_jeudi;
    }

    set horaires_jeudi(value) {
        this._horaires_jeudi = value;
    }

    get horaires_vendredi() {
        return this._horaires_vendredi;
    }

    set horaires_vendredi(value) {
        this._horaires_vendredi = value;
    }

    get horaires_samedi() {
        return this._horaires_samedi;
    }

    set horaires_samedi(value) {
        this._horaires_samedi = value;
    }

    get horaires_dimanche() {
        return this._horaires_dimanche;
    }

    set horaires_dimanche(value) {
        this._horaires_dimanche = value;
    }

    get besoin() {
        return this._besoin;
    }

    set besoin(value) {
        this._besoin = value;
    }

}