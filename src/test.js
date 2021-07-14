const { ReplaceDots } = require('./replaceDots');

describe('test Replace-Dots functions', () => {
  it('string without any dots', () => {
    const replaceDots = new ReplaceDots();
    expect(replaceDots.replaceDots("This is a test!")).toBe("This is a test!");
    
  });
});