const _accept_key = (key) => {
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

const _rev = (type, number, mid, length) => {
    let a = number;
    if (type == "right" && number < mid) {
        a = length - number
        type = "left"
    } else if (type == "left" && number > mid) {
        a = length - number
        type = "right"
    }
    return {
        "type": type,
        "number": a
    };
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

const _shift = (arr = [], type, number) => {
    const length = arr.length
    number = number % length
    mid = length / 2
    if (number == 0) return arr
    // optimized time
    const t = _rev(type, number, mid, length);
    type = t.type
    number = t.number
    // end
    return type === "right" ? _shift_right(arr, number) : _shift_left(arr, number);
}

const shift = (option) => {
    return _shift(option._all.array, option._all.type, option._all.number);
}

module.exports = {
    shift: shift,
    _accept_key: _accept_key,
    _shift_left: _shift_left,
    _shift_right: _shift_right,
    _shift: _shift
};