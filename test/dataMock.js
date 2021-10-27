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

let mdPathsFiltered = [
  'D:\\Laboratoria\\Admisión\\Proyectos\\MD-LInks\\CDMX011-md-links\\Directorio\\HOla\\Hol\\sinLInks.md',
  'D:\\Laboratoria\\Admisión\\Proyectos\\MD-LInks\\CDMX011-md-links\\Directorio\\HOla\\rasco.md',
  'D:\\Laboratoria\\Admisión\\Proyectos\\MD-LInks\\CDMX011-md-links\\Directorio\\README.MARKDOWN'
]

let LinksFromMds =     [
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

let validatedLinks = { Total: 2, Unique: 2, Broken: 1 }

let promiseWithoutOptions =
  [
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

  let promiseValidated = 
  [
    {
      href: 'https://nodejs.dev/learn/reading-files-with-nodejs',
      text: 'Node',
      file: 'D:\\Laboratoria\\Admisión\\Proyectos\\MD-LInks\\CDMX011-md-links\\Directorio\\HOla\\rasco.md',
      response: 200,
      ok: 'OK'
    },
    {
      href: 'http://www.dihola.com.mx/',
      text: 'Hello',
      file: 'D:\\Laboratoria\\Admisión\\Proyectos\\MD-LInks\\CDMX011-md-links\\Directorio\\HOla\\rasco.md',
      response: 200,
      ok: 'OK'
    },
    {
      href: 'https://asuartmuseum.asu.edu/research-and-initiatives/residency',
      text: 'arte residency',
      file: 'D:\\Laboratoria\\Admisión\\Proyectos\\MD-LInks\\CDMX011-md-links\\Directorio\\HOla\\rasco.md',
      response: 200,
      ok: 'OK'
    },
    {
      href: 'https://es.wikipedia.org/wiki/Markdown',
      text: 'Markdown',
      file: 'D:\\Laboratoria\\Admisión\\Proyectos\\MD-LInks\\CDMX011-md-links\\Directorio\\README.MARKDOWN',
      response: 200,
      ok: 'OK'
    },
    {
      href: 'http://www.dihola.com.mx/',
      text: 'Hello',
      file: 'D:\\Laboratoria\\Admisión\\Proyectos\\MD-LInks\\CDMX011-md-links\\Directorio\\README.MARKDOWN',
      response: 200,
      ok: 'OK'
    },
    {
      href: 'https://www.holland.com/es/turist.htm',
      text: 'paleta',
      file: 'D:\\Laboratoria\\Admisión\\Proyectos\\MD-LInks\\CDMX011-md-links\\Directorio\\README.MARKDOWN',
      response: 404,
      ok: 'fail'
    }
  ]

const promiseValStats = { Total: 6, Unique: 5, Broken: 1 }

const noLinksFile = "Your path does not contain markdown files 🤷‍♀️ 📋"


  module.exports = {
    mdFiltered,
    response,
    linkOk,
    linkFail,
    responseOk,
    responseFail,
    linksToValidate,
    validatedLinks, 
    mdPathsFiltered,
    LinksFromMds,
    promiseWithoutOptions,
    promiseValidated,
    promiseValStats,
    noLinksFile
  }