const path = require('path');
const fs = require('fs');

//the path is valid?
const validPath = (route) => fs.existsSync(route); 

//the path is Absolute, if false, then converts the Relative path to Absolute
const convertPath = (route) => (path.isAbsolute(route) ? route : path.resolve(route));

//the path is a File?
const pathFile = (route) => fs.statSync(route).isFile();

// reads the file
const fileContent = (route) => fs.readFileSync(route);

// reads the Directory
const dirContent = (route) => fs.readdirSync(route);

// gets the extension of the file
const fileExt = (route) => path.extname(route)

// gets markdown Files in an array
const getsMdFiles = (route) => {
    let arrayMdFiles = []
    if (pathFile(route)){
        if(fileExt(route) === '.md' || fileExt(route) === '.MARKDOWN'){
            arrayMdFiles.push(route)
        }
    } else{
        const filesInDir = dirContent(route);
        filesInDir.map((file) => {
            const pathFileJoin = path.join(route, file);
            arrayMdFiles = arrayMdFiles.concat(getsMdFiles(pathFileJoin));
        });
    }
    return arrayMdFiles;
}
    


module.exports = {
   validPath,
   convertPath,
   pathFile,
   fileContent,
   dirContent,
   fileExt,
   getsMdFiles
 };