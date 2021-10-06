const { getsMdFiles } = require('./get-md');
const { getLinks } = require('./get-links');

const mdLinks = (pathFiles, choice) => {
    const mdFiles = getsMdFiles(pathFiles)
    return getLinks(mdFiles)
}

console.log(mdLinks('../CDMX011-md-links/src'))
