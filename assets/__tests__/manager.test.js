const Manager = require('../lib/manager.js');

describe('Manager', () => {
  describe('Initialization', () => {
    // Positive test
    it("", () => {
      // Arrange
      const text = '';

      // Act
      const obj = new Manager(text);

      // Assert
      expect(obj.text).toEqual(text);
    });

    // Exception test
    it("", () => {
      // Arrange
      const cb = () => new Manager();
      const err = new Error(
        ""
      );

      // Assert
      expect(cb).toThrowError(err);
    });
  });
});