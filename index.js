const fs = require('fs')
const path = require('path')


/* module.exports = function (directory, callback){
  fs.readdir(directory, (error, files) => {
    let mdsArray = []
    if (error) {
      callback(error)
    }else {
      files.forEach(element => {
        if (path.extname(element) === ".md" || path.extname(element.toLocaleLowerCase()) === ".markdown" || path.extname(element.toLowerCase()) === ".mdown"){
          mdsArray.push(element) 
        }
      })
      callback(null, mdsArray)´
    }

    console.log(mdsArray)
  })
} */


/* module.exports = function readMd (directory){
  return new Promise ((resolve, reject) => {
    if (directory){
      fs.readdir(directory, (error, files) => {
        let mdsArray = []
        files.forEach(element => {
          if (error) {
            throw err
          }else if (path.extname(element) === ".md" || path.extname(element.toLocaleLowerCase()) === ".markdown" || path.extname(element.toLowerCase()) === ".mdown"){
            mdsArray.push(element)
            resolve(mdsArray)
          }
        })
      })
    } else if (!directory) {
      reject ('el direcotrio no existe')
    } 
  })
}  */ 

module.exports = function readMd (directory){
  let mdsArray = []
  return new Promise ((resolve, reject) => {
    if (directory){
      fs.readdir(directory, (error, files) => {
        files.forEach(element => {
          let pathElement = path.resolve(directory, element)
          if (error) {
            throw error
          } else if  (path.extname(pathElement) === ".md" || path.extname(pathElement.toLocaleLowerCase()) === ".markdown" || path.extname(pathElement.toLowerCase()) === ".mdown") {
              mdsArray.push(pathElement)
              resolve(mdsArray)
          } else if (fs.lstatSync(pathElement).isDirectory()){
              readMd(pathElement)
              console.log(element)
              console.log(mdsArray)
              resolve(mdsArray)
          }
        })
      })
      resolve(mdsArray)
    } else if (!directory) {
      reject ('el direcotrio no existe')
    } 
  })
} 





