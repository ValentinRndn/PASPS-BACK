class Blog {
    constructor(id, titre, date, photo, description, epingle) {
        this._id = id;
        this._titre = titre;
        this._date = date;
        this._photo = photo;
        this._description = description;
        this._epingle = epingle;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get titre() {
        return this._titre;
    }

    set titre(value) {
        this._titre = value;
    }

    get date() {
        return this._date;
    }

    set date(value) {
        this._date = value;
    }

    get photo() {
        return this._photo;
    }

    set photo(value) {
        this._photo = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    get epingle() {
        return this._epingle;
    }

    set epingle(value) {
        this._epingle = value;
    }

    //FromMap
    static fromMap(map) {
        return new Blog(map.id, map.titre, map.date, map.photo, map.description, map.epingle);
    }

    //ToMap
    toMap() {
        return {
            id: this._id,
            titre: this._titre,
            date: this._date,
            photo: this._photo,
            description: this._description,
            epingle: this._epingle
        };
    }


}

module.exports = Blog;    