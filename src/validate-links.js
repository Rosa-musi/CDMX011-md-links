const axios = require('axios');

/* const links =                                                                                                 
    {                                                                                                                                                                   
        href: 'https://developer.mozilla.org/en-US/404',                             
        text: 'Markdown',                                                           
        file: 'C:\\Users\\Part\\cmder\\CDMX011-md-links\\src\\prueba.MARKDOWN'                                                                                                  
    };      */                                                                                           
                                                                                                   
 // function that validates the links https://stackoverflow.com/questions/31710768/how-can-i-fetch-an-array-of-urls-with-promise-all
const validateLinks = (links) => {
    return axios(links.href)
        .then((res) => {
            if(res.status >= 200 && res.status < 400){
                return {
                    ...links,
                    status: res.status,
                    message: res.statusText
                };
            }
        })
        .catch((err) =>{
            return {
                ...links,
                status: err.response.status,
                message: `Fail: ${err.response.statusText}`,            
            }
        }
        )
    };

/* validateLinks(links).then((result) => {
    console.log(result)
})
.catch(err => {
    console.log(err)
}) */

module.exports.validateLinks = validateLinks
 