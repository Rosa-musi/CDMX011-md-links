const axios = require('axios').default;

/*  const links =
    {
        href: 'https://developer.mozilla.org/en-US/404',
        text: 'Markdown',
        file: 'C:\\Users\\Part\\cmder\\CDMX011-md-links\\src\\prueba.MARKDOWN'
    };   */

// function that validates the links https://stackoverflow.com/questions/31710768/how-can-i-fetch-an-array-of-urls-with-promise-all
const validateLinks = (links) => axios.get(links.href) // https://developer.mozilla.org/es/docs/Web/HTTP/Status
  .then((res) => ({
    ...links,
    status: res.status,
    message: res.statusText,
  }))
  .catch((err) => ({
    ...links,
    status: err.response.status,
    message: 'FAIL',
  }));

/* validateLinks(links).then((result) => {
    console.log(result)
})
.catch(err => {
    console.log(err)
})  */

module.exports.validateLinks = validateLinks;
