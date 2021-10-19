const mdFilter = require('../utils/mdFilter');
const { mdFiltered } = require('./dataMock')

const path = '../Directorio'

describe('mdLinks', () => {

  it('should...', () => {
    console.log('FIX ME!');
  });

});

describe('mdLinks', () => {
  it('Should read files and directories and filter markdown files', () => {
      expect(mdFilter(path)).toBe(mdFiltered);
  });
});