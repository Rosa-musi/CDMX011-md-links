const {
  extname, isAbsolute, resolve, join,
} = require('path');
const fs = require('fs');
// the path is valid?
const validPath = (route) => fs.existsSync(route);

// gets markdown Files in an array
const getsMdFiles = (route) => {
  let arrayMdFiles = [];
  // the path is Absolute, if false, then converts the Relative path to Absolute
  const convertPath = (isAbsolute(route) ? route : resolve(route));
  // the path is a File?
  if (fs.lstatSync(convertPath).isFile()) {
    if (extname(convertPath) === '.md' || extname(convertPath.toLowerCase()) === '.markdown' || extname(convertPath) === '.mdown') {
      arrayMdFiles.push(convertPath);
    }
  } else {
    // reads the Directory
    const filesInDir = fs.readdirSync(convertPath);
    filesInDir.forEach((file) => {
      const pathFileJoin = join(convertPath, file);
      const recursivity = getsMdFiles(pathFileJoin);
      arrayMdFiles = arrayMdFiles.concat(recursivity);
    });
  }
  return arrayMdFiles;
};

/* Another solution:
const getsMd = (dir) => {
  let results = [];
  const convertPath = (isAbsolute(dir) ? dir : resolve(dir));
  const list = fs.readdirSync(convertPath);
  list.forEach((file) => {
    const pathFileJoin = join(convertPath, file);
    if (fs.lstatSync(pathFileJoin).isDirectory()) {
      // Recurse into a subdirectory
      results = results.concat(getsMd(pathFileJoin));
    } else if (extname(pathFileJoin) === '.md' || extname(pathFileJoin.toLowerCase()) === '.markdown') {
      // Is a file
      results.push(pathFileJoin);
    }
  });
  return results;
}; */

module.exports = {
  validPath,
  getsMdFiles,
};
