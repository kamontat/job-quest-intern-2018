const axios = require("axios");

async function _fetch(path = "", parameter = "") {
    return await axios.get("https://api.icndb.com/" + path + "?escape=javascript" + parameter);
}

/**
 * request joke by specify ID.
 *
 * @param {Number} id joke ID
 *
 * @author Kamontat Chantrachirathumrong
 */
export async function fetch_joke(id = 1) {
    // const htmlencode = require("htmlencode"); const f =
    // "(function(r){console.log(r.value);})"
    return await _fetch("jokes/" + id/* , "&callback=" + f */); // htmlencode.htmlEncode(f));
}

/**
 * random joke(s) with the number of total requested joke.
 * If the number is 1, the returned value will by object instead of array.
 * With optional parameter **first name** and **last name**.
 *
 * @param {Number} number total number of requested
 * @param {string} firstname first name of the requested joke.
 * @param {string} lastname last name of the requested joke.
 *
 * @author Kamontat Chantrachirathumrong
 */
export async function fetch_random_joke(number = 1, firstname, lastname) {
    // const htmlencode = require("htmlencode");
    let f = "",
        l = "";
    let joke_path = "jokes/random/"
    if (firstname) 
        f = `&firstName=${firstname}`;
    if (lastname) 
        l = `&lastName=${lastname}`;
    let raw = `${f}${l}`;
    // const parameter = htmlencode.htmlEncode(raw);
    if (number === 1) {
        return await _fetch(joke_path, raw);
    } else {
        return await _fetch(joke_path + number, raw);
    }
}