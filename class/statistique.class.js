class Statistique {
    constructor(personnes, maraudes, preservatifs) {
        this._personnes = personnes;
        this._maraudes = maraudes;
        this._preservatifs = preservatifs;
    }

    get personnes() {
        return this._personnes;
    }

    set personnes(value) {
        this._personnes = value;
    }

    get maraudes() {
        return this._maraudes;
    }

    set maraudes(value) {
        this._maraudes = value;
    }

    get preservatifs() {
        return this._preservatifs;
    }

    set preservatifs(value) {
        this._preservatifs = value;
    }

    toMap() {
        return {
            personnes: this._personnes,
            maraudes: this._maraudes,
            preservatifs: this._preservatifs
        };
    }

    static fromMap(map) {
        return new Statistique(map.personnes, map.maraudes, map.preservatifs);
    }
}

module.exports = Statistique;