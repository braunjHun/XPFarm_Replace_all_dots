const { ReplaceDots } = require('./replaceDots');

describe('Test Replace-Dots functions', () => {
  it('Input without dots:', () => {
    const replaceDots = new ReplaceDots();
    expect(replaceDots.replaceDots("This is a test!")).toBe("This is a test!");
  });
  it('Input with one dot:', () => {
    const replaceDots = new ReplaceDots();
    expect(replaceDots.replaceDots("This.is a test!")).toBe("This-is a test!");
  });
  it('Input with two dots:', () => {
    const replaceDots = new ReplaceDots();
    expect(replaceDots.replaceDots("This.is.a test!")).toBe("This-is-a test!");
  });
});