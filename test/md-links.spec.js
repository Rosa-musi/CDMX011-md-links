const { 
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
} = require('./dataMock')
const stats = require('../utils/stats');
const validate = require('../utils/validate')
const validateStats = require('../utils/StatsValidate')
const mdFilter = require('../utils/mdFilter')
const getLinks = require('../utils/getLinks')
const mdLinks = require('../utils/mdLinks')
const path = 'D:\\Laboratoria\\Admisión\\Proyectos\\MD-LInks\\CDMX011-md-links\\Directorio'
const pathNoLinks = 'D:\\Laboratoria\\Admisión\\Proyectos\\MD-LInks\\CDMX011-md-links\\Directorio\\HOla\\Hol\\H'



describe('options', () => {
  it('--stats should give the total and unique links', () => {
    expect(stats(mdFiltered)).toStrictEqual(response);
  });
  it('--validate should give an ok status', () => {
    return validate(linkOk).then(data => {
      expect(data).toEqual(responseOk)
    })
  });
  it('--validate should give a fail status async-await', async () => {
    const linkResponse = await validate(linkFail)
    expect(linkResponse).toEqual(responseFail)
    
  });
  it('--validate should give a fail status promise', () => {
    return validate(linkFail).then(data => {
      expect(data).toEqual(responseFail)
    })
  });
  it('--validate + --stats should give statistics and broken links', () =>{
    return validateStats(linksToValidate).then(data=> {
      expect(data).toStrictEqual(validatedLinks)
    })
  })
});

describe('mdFilter', () => {
  it('should filter a directory or a file and find markdown files', () => {
    expect(mdFilter(path)).toStrictEqual(mdPathsFiltered)
  })
})

describe('getLinks', () => {
  it('should get links from markdown files' , () => {
    expect(getLinks(mdPathsFiltered)).toStrictEqual(LinksFromMds)
  })
})

describe('mdLinks', () => {
  it('should return href, text and file rout from a path', () =>{
    return mdLinks(path, false, false).then(data => {
      expect(data).toEqual(promiseWithoutOptions)
    })
  })
  it('should return href, text, file, status and status text', () =>{
    return mdLinks(path, true, false).then(data => {
      expect(data).toEqual(promiseValidated)
    })
  })
  it('should return number of links, unique and broken', () =>{
    return mdLinks(path, true, true).then(data => {
      expect(data).toEqual(promiseValStats)
    })
  })
   it('no files', () =>{
    return mdLinks(pathNoLinks, false, false).then(data => {
    }).catch(err => expect(err).toEqual(noLinksFile))
  }) 
})
 


 

 
