exports.randomProperty = (obj) => {
    var keys = Object.keys(obj);
    let randomKey = keys[keys.length * Math.random() << 0];
    return obj[randomKey];
};
