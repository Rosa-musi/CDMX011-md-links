const { getsMdFiles } = require('./get-md');
const { getLinks } = require('./get-links');
const { validateLinks } = require('./validate-links');

const mdLinks = (pathFiles, choice) => {
    const mdFiles = getsMdFiles(pathFiles)
    const links = getLinks(mdFiles)
    return validateLinks(links).then(res => { console.log(res) }).catch(err => {console.error(err)});
}

console.log(mdLinks('../CDMX011-md-links/src'))

