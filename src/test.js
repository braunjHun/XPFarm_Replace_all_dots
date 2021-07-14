const { ReplaceDots } = require('./replaceDots');

describe('test Replace-Dots functions', () => {
  it('string without any dots', () => {
    const mountSize = new MountSize();
    expect(mountSize.getMountSize("This is a test!")).toBe("This is a test!");
    
  });
});