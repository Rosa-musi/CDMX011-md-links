let promiseFail = {
    get: jest.fn(() => Promise.resolve({
        href: 'https://www.holland.com/es/turist.htm',
        text: 'paleta',
        file: 'D:\\Laboratoria\\Admisión\\Proyectos\\MD-LInks\\CDMX011-md-links\\Directorio\\README.MARKDOWN',
        response: 404,
        ok: 'fail'
      }
    ))
}

let promiseOk = {
    get: jest.fn(() => Promise.resolve({
        href: 'http://www.dihola.com.mx/',
        text: 'Hello',
        file: 'D:\\Laboratoria\\Admisión\\Proyectos\\MD-LInks\\CDMX011-md-links\\Directorio\\README.MARKDOWN',
        response: 200,
        ok: 'OK'    
    }))
}