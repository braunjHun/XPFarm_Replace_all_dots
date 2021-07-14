const { ReplaceDots } = require('./replaceDots');

describe('Test Replace-Dots functions', () => {
  it('Input without dots:', () => {
    const replaceDots = new ReplaceDots();
    expect(replaceDots.replaceDots("This is a test!")).toBe("This is a test!");
  });
});