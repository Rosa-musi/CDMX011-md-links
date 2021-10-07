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
  return new Promise ((resolve, reject) => {
    if (directory){
      fs.readdir(directory, (error, files) => {
        let mdsArray = []
        let isDirectory = []
        files.forEach(element => {
          let pathElement = path.resolve(directory, element)
          if (error) {
            throw err
          }else if (fs.lstatSync(pathElement).isDirectory()){
            readMd(pathElement)
            console.log(element)
            resolve(mdsArray)
          } else if  (path.extname(element) === ".md" || path.extname(element.toLocaleLowerCase()) === ".markdown" || path.extname(element.toLowerCase()) === ".mdown") {
              mdsArray.push(element)
              resolve(mdsArray)
          }
        })
      })
    } else if (!directory) {
      reject ('el direcotrio no existe')
    } 
  })
} 





