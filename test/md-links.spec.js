const { 
  mdFiltered, 
  response, 
  linkOk, 
  linkFail, 
  responseOk, 
  responseFail,
  linksToValidate,
  validatedLinks
} = require('./dataMock')
const stats = require('../utils/stats');
const validate = require('../utils/validate')
//const mockAxios = require('../__mocks__/axiosOk')
const mockAxios = require('axios')
const validateStats = require('../utils/StatsValidate')

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