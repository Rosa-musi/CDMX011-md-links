let mdFiltered = [
    {
      href: 'https://nodejs.dev/learn/reading-files-with-nodejs',
      text: 'Node',
      file: 'D:\\Laboratoria\\Admisión\\Proyectos\\MD-LInks\\CDMX011-md-links\\Directorio\\HOla\\rasco.md'
    },
    {
      href: 'http://www.dihola.com.mx/',
      text: 'Hello',
      file: 'D:\\Laboratoria\\Admisión\\Proyectos\\MD-LInks\\CDMX011-md-links\\Directorio\\HOla\\rasco.md'
    },
    {
      href: 'https://asuartmuseum.asu.edu/research-and-initiatives/residency',
      text: 'arte residency',
      file: 'D:\\Laboratoria\\Admisión\\Proyectos\\MD-LInks\\CDMX011-md-links\\Directorio\\HOla\\rasco.md'
    },
    {
      href: 'https://es.wikipedia.org/wiki/Markdown',
      text: 'Markdown',
      file: 'D:\\Laboratoria\\Admisión\\Proyectos\\MD-LInks\\CDMX011-md-links\\Directorio\\README.MARKDOWN'
    },
    {
      href: 'http://www.dihola.com.mx/',
      text: 'Hello',
      file: 'D:\\Laboratoria\\Admisión\\Proyectos\\MD-LInks\\CDMX011-md-links\\Directorio\\README.MARKDOWN'
    },
    {
      href: 'https://www.holland.com/es/turist.htm',
      text: 'paleta',
      file: 'D:\\Laboratoria\\Admisión\\Proyectos\\MD-LInks\\CDMX011-md-links\\Directorio\\README.MARKDOWN'
    }
  ]

let response = {
  Total: 6, 
  Unique: 5
}

let linkOk = {
    href: 'http://www.dihola.com.mx/'
}

let linkFail = {
  href: 'https://www.holland.com/es/turist.htm'
}

let responseOk = {
  href: 'http://www.dihola.com.mx/',
  response: 200,
  ok: 'OK'
}

let responseFail = {
  href: 'https://www.holland.com/es/turist.htm',
  "ok": "fail",
  response: 404
}

let linksToValidate = [
  {
    href: 'http://www.dihola.com.mx/',
    text: 'Hello',
    file: 'D:\\Laboratoria\\Admisión\\Proyectos\\MD-LInks\\CDMX011-md-links\\Directorio\\README.MARKDOWN'
  },
  {
    href: 'https://www.holland.com/es/turist.htm',
    text: 'paleta',
    file: 'D:\\Laboratoria\\Admisión\\Proyectos\\MD-LInks\\CDMX011-md-links\\Directorio\\README.MARKDOWN'
  }
]

let validatedLinks = { Total: 2, Unique: 2, Broken: 1 }

  module.exports = {
    mdFiltered,
    response,
    linkOk,
    linkFail,
    responseOk,
    responseFail,
    linksToValidate,
    validatedLinks
  }