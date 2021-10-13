const { getsMdFiles, validPath } = require('../src/get-md.js');



describe('Returns true if the path exists, false otherwise.', () => {
  it('should be a function', () => {
    expect(typeof validPath).toBe('function');
  });
  it("should return true if the path exist", () => {
    expect(validPath('../CDMX011-md-links/README.md')).toBe(true);
  })
  it("should return false if the path does not exist", () => {
    expect(validPath('../CDMX011-md-links/index.md')).toBe(false);
  })
});



