const { getsMdFiles, validPath } = require('./get-md');
const { getLinks } = require('./get-links');
const { validateLinks } = require('./validate-links');
const { linksStats, linksTotalStats } = require('./stats');


// mdLiks function with 2 parameters (path, options)
const mdLinks = (pathFiles, options = {validate:false, stats: false }) => {
    return new Promise((resolve, reject) =>{
        const pathExists = validPath(pathFiles);
        if(pathExists){
            const mdFiles = getsMdFiles(pathFiles);
            if(mdFiles.length === 0) reject('There are no Markdown Files')
            const mdLinks = getLinks(mdFiles);
            if(mdLinks.length === 0) reject('There are no links')
            if (options.validate === true && options.stats === false){
               const linksToValidate = mdLinks.map(link => validateLinks(link));
               resolve(Promise.all(linksToValidate))
            } else if(options.validate === false && options.stats === true){
                const statsData = linksStats(mdLinks)
               resolve(statsData) 
            } else if(options.validate === true && options.stats === true){
                const linksToValidate = mdLinks.map(link => validateLinks(link));
                resolve (Promise.all(linksToValidate)
                .then(res => {return linksTotalStats(res)})
                .catch(error => {console.error(error)}))                
            } else {
               resolve(mdLinks)
            }
        } else {
            reject('The path does not exists, try again');
        }
    })
};

/* mdLinks('../CDMX011-md-links/src', {validate: true, stats: false})
.then(res => {
    console.log(res)
})
.catch(reject => {
    console.error(reject)
}) */

module.exports.mdLinks = mdLinks;