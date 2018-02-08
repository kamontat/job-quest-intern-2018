const accept_key = (key) => {
    let key_low = key.toLowerCase();
    if (key_low === "right" ||
        key_low === "r")
        return "right";
    else if (key_low === "left" ||
        key_low === "l")
        return "left";
    else
        return null;
}

const _shift_left = (arr, number) => {
    let a = [];
    for (let i = 0; i < number; i++) {
        a.push(arr.shift());
    }
    a.forEach(element => {
        arr.push(element);
    });
    return arr;
}

const _shift_right = (arr, number) => {
    let a = [];
    for (let i = 0; i < number; i++) {
        a.push(arr.pop());
    }

    a.forEach(element => {
        arr.unshift(element);
    });
    return arr;
}

const shift = (option) => {
    arr = option._all.array
    length = arr.length
    number = option._all.number
    type = option._all.type

    number = number % length
    if (number == 0) return arr
    return type === "right" ? _shift_right(arr, number) : _shift_left(arr, number);
}

const optionDefinitions = [{
    name: "array",
    alias: "a",
    type: String,
    typeLabel: "<string_array>",
    description: "Input array of string",
    multiple: true,
    defaultOption: true
}, {
    name: "type",
    alias: "t",
    defaultValue: "right",
    type: key => accept_key(key),
    description: "Which direction for shifting",
    typeLabel: "<right|left>"
}, {
    name: "number",
    alias: "n",
    defaultValue: "1",
    type: Number,
    description: "How many to shift the array",
    typeLabel: "<shift_time>"
}, {
    name: "help",
    alias: "h",
    type: Boolean,
    group: "misc",
    description: "Display this usage guide."
}]

const optionUsage = [{
    header: "Shift Array",
    content: "This CLI is for shift input array as you wish."
}, {
    header: "Options",
    optionList: optionDefinitions,
    group: '_none'
}, {
    header: 'Misc',
    optionList: optionDefinitions,
    group: 'misc'
}]

const commandLineArgs = require("command-line-args");
const getUsage = require("command-line-usage");

const options = commandLineArgs(optionDefinitions);

if (options.misc.help) {
    const usage = getUsage(optionUsage);
    console.log(usage);
} else {
    console.log(shift(options));
}