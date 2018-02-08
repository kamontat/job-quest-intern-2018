const shift = require("./algorithm").shift;
const accept_key = require("./algorithm")._accept_key;

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