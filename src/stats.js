//important https://stackoverflow.com/questions/2218999/how-to-remove-all-duplicates-from-an-array-of-objects
const links = [                                                                                 
    {                                                                               
      href: 'https://es.wikipedia.org/wiki/Markdown',                               
      text: 'Markdown',                                                             
      file: 'C:\\Users\\Part\\cmder\\CDMX011-md-links\\src\\prueba.MARKDOWN',       
      status: 200,                                                                  
      message: 'OK'                                                                 
    },                                                                              
    {                                                                               
      href: 'https://developer.mozilla.org/en-US/404',                              
      text: 'SoftwareIntegration',                                                  
      file: 'C:\\Users\\Part\\cmder\\CDMX011-md-links\\src\\prueba.MARKDOWN',       
      status: 404,                                                                  
      message: 'FAIL'                                                    
    },
    {                                                                               
        href: 'https://developer.mozilla.org/en-US/404',                              
        text: 'SoftwareIntegration',                                                  
        file: 'C:\\Users\\Part\\cmder\\CDMX011-md-links\\src\\prueba.MARKDOWN',       
        status: 404,                                                                  
        message: 'FAIL'                                                    
    },
    {                                                                               
        href: 'https://es.wikipedia.org/wiki/Markdown',                               
        text: 'Markdown',                                                             
        file: 'C:\\Users\\Part\\cmder\\CDMX011-md-links\\src\\prueba.MARKDOWN',       
        status: 200,                                                                  
        message: 'OK'                                                                 
    }                                                                                    
  ];                                                                              




const uniqueLinks = (linksArray) => {
    const hrefs = linksArray.map(urls => urls.href)
    const filtered = linksArray.filter(({href}, index) => !hrefs.includes(href, index + 1))
    return  `Unique: ${filtered.length}`
}

console.log(uniqueLinks(links))

const brokenLinks = (linksValidated) => {
    const brokenLink  = linksValidated.filter((link) => link.message === "FAIL")
    return `Broken: ${brokenLink.length}`
}
console.log(brokenLinks(links))

const totalLinks = (linksArray) => {
    const hrefs = linksArray.map(urls => urls.href);
    return `Total: ${hrefs.length}`
}
console.log(totalLinks(links))

module.exports = {
    totalLinks,
    brokenLinks,
    uniqueLinks
  };