const fs = require('fs')
const path = require('path')

module.exports = function (directory, callback){
  fs.readdir(directory, (error, files) => {
    let mdsArray = []
    if (error) {
      callback(error)
    }else {
      files.forEach(element => {
        if (path.extname(element) === ".md"){
          mdsArray.push(element)
        }
      })
      callback(null, mdsArray)
    }

    console.log(mdsArray)
  })
}


