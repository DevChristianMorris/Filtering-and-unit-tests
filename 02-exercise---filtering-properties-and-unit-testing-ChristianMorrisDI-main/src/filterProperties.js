const properties = require("./properties.json");

const filterProperties = (properties) => {
    return properties.filter(properties => properties.private === false) };


module.exports = filterProperties;

console.log(filterProperties);