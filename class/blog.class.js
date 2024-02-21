class Blog {
    constructor(id, titre, date, photo, description) {
        this._id = id;
        this._titre = titre;
        this._date = date;
        this._photo = photo;
        this._description = description;
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


}