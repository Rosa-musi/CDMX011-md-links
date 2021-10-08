const path = require('path');
const fs = require('fs');
//the path is valid?
const validPath = (route) => fs.existsSync(route); 

//the path is a File?
const pathFile = (route) => fs.statSync(route).isFile();

// reads the Directory
const dirContent = (route) => fs.readdirSync(route);

// gets the extension of the file
const fileExt = (route) => path.extname(route.toLowerCase());

// gets markdown Files in an array
const getsMdFiles = (route) => {
    let arrayMdFiles = []
    //the path is Absolute, if false, then converts the Relative path to Absolute
    const convertPath = (path.isAbsolute(route) ? route : path.resolve(route));
    if (pathFile(convertPath)){
        if(fileExt(convertPath) === '.md' || fileExt(convertPath) === '.markdown'){
            arrayMdFiles.push(convertPath)
        }
    } else{
        const filesInDir = dirContent(convertPath);
        filesInDir.map((file) => {
            const pathFileJoin = path.join(convertPath, file);
            arrayMdFiles = arrayMdFiles.concat(getsMdFiles(pathFileJoin));
        });
    }
    return arrayMdFiles;
}
    

module.exports = {
   validPath,
   pathFile,
   dirContent,
   fileExt,
   getsMdFiles
 };