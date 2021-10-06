const { getsMdFiles } = require('./get-md');
const { getLinks } = require('./get-links');

console.log(getsMdFiles('../CDMX011-md-links/src'))
console.log(getLinks('../CDMX011-md-links/src'))
