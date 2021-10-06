const { getsMdFiles } = require('./get-md');
const fs = require('fs');
const marked = require('marked');

// reads the file
const fileContent = (route) => fs.readFileSync(route,'utf-8');

// gets the links in Md files
const getLinks = (filePath) => {
    const arrayLinks = [];
    const mdFiles = getsMdFiles(filePath);

    mdFiles.forEach((files) => {
        const readMd = fileContent(files);
        const renderer = new marked.Renderer();
        renderer.link = (href,title,text) => {
            arrayLinks.push(
                {
                    href: href,
                    text: text, 
                    file: files
                }
            )
        };
        marked(readMd,{renderer});        
    });
    return arrayLinks
}

module.exports = {
    getLinks
  };
