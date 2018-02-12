import Joke from '../models/Joke';
import {fetch_random_joke} from '../utilities/JokeAPI';

export async function fetching(number = 1, firstname, lastname) {
    let _response = await fetch_random_joke(number, firstname, lastname);
    if (_response.data.value instanceof Array) {
        return _response
            .data
            .value
            .map((obj) => new Joke(obj));
    } else {
        return new Joke(_response);
    }

}