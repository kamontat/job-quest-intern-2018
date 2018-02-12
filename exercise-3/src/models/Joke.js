export default class Joke {
    constructor(json = {}) {
        json = this._validate(json);
        this.joke = json;
    }

    _validate(json) {
        if (json.data) {
            return this._validate(json.data);
        } else if (json.type) {
            if (json.type !== "success") 
                return {};
            if (json.value) 
                return this._validate(json.value);
            else 
                return {};
        } else {
            return json;
        }
    }

    get_id() {
        if (!this.joke.id) 
            return 0;
        return this.joke.id;
    }

    get_joke() {
        if (!this.joke.joke) 
            return "";
        return this.joke.joke;
    }

    to_string() {
        return JSON.stringify(this.joke);
    }
}