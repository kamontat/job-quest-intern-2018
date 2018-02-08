const hero = require("./hero.json");

const _reduce = (json, fn, init) => {
    return json.reduce(fn, init);
};

const highestAssist_fn = (p, c) => {
    if (!p) return c;
    if (p.assist > c.assist) return p;
    else return c;
};

const lowestKillPerDeathRatio_fn = (p, c) => {
    if (!p) return c;
    const kd1 = p.kill / p.death;
    const kd2 = c.kill / c.death;
    if (kd1 > kd2) return c;
    else return p;
};

const onlyIntelligent_fn = h => h.primary_attribute === "intelligent";

const _avg_fn = (key) => {
    return (p, c) => {
        if (!p) return Number(c[key]);
        return p + Number(c[key]);
    }
};

const avg = (json, key) => {
    return _reduce(json, _avg_fn(key)) / json.length;
};

const avg_with_condition = (json, condition, key) => {
    return avg(json.filter(condition), key);
};

console.log("Average networth: " +
    avg(hero, "networth"));

console.log("Average level for 'intelligent': " +
    avg_with_condition(hero, onlyIntelligent_fn, "level"));

console.log("Highest assist value: ");
console.log(_reduce(hero, highestAssist_fn));

console.log("Lowest kill/death ratio: ");
console.log(_reduce(hero, lowestKillPerDeathRatio_fn));