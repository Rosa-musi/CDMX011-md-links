const { getsMdFiles, validPath } = require('./get-md');
const { getLinks } = require('./get-links');
const { validateLinks } = require('./validate-links');



// mdLiks function with 2 parameters (path, options)
const mdLinks = (pathFiles, option) => {
    return new Promise((resolve, reject) =>{
        const pathExists = validPath(pathFiles);
        if(pathExists){
            const mdFiles = getsMdFiles(pathFiles);
            if(mdFiles.length === 0) reject('There are no mdFiles')
            const mdLinks = getLinks(mdFiles);
            if(mdLinks.length === 0) reject('There are no links')
           if (option.validate === true){
               const linksToValidate = mdLinks.map(link => {
                   const validator = validateLinks(link);
                   return validator
               });
               resolve(Promise.all(linksToValidate))
           } else {
               resolve(mdLinks)
           }
        } else {
            reject('The path does not exists, try again');
        }
    }
    )
};

mdLinks('../CDMX011-md-links/src',{validate: true})
.then(res => {
    console.log(res)
})
.catch(reject => {
    console.error(reject)
})

