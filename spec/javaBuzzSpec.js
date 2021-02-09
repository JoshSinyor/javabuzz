// 'use strict'

describe('Javabuzz', function() {

  var javabuzz;

  beforeEach(function() {
    javabuzz = new Javabuzz();
  });

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      expect(javabuzz._isDivisibleBy(3, 3)).toBe(true);
    });

    it('not divisible by 3', function() {
      expect(javabuzz._isDivisibleBy(1, 3)).toBe(false);
    });

    it('divisible by 5', function() {
      expect(javabuzz._isDivisibleBy(5, 5)).toBe(true);
    });

    it('not divisible by 5', function() {
      expect(javabuzz._isDivisibleBy(1, 5)).toBe(false);
    });

    it('divisible by by 15', function() {
      expect(javabuzz._isDivisibleBy(15, 15)).toBe(true);
    });

    it('not divisible by 15', function() {
      expect(javabuzz._isDivisibleBy(3, 15)).toBe(false);
    });

    it('not divisible by 15', function() {
      expect(javabuzz._isDivisibleBy(5, 15)).toBe(false);
    });

  });

  describe('when playing, play', function() {

    it('"Java" when a number is divisible by 3', function() {
      expect(javabuzz.play(3)).toEqual("Java")
    });

    it('"Buzz" when a number is divisible by 5', function() {
      expect(javabuzz.play(5)).toEqual("Buzz")
    });

    it('"JavaBuzz" when a number is divisible by 15', function() {
      expect(javabuzz.play(15)).toEqual("JavaBuzz")
    });

    it('the number when a number is not divisible by 3 or 5', function() {
      expect(javabuzz.play(1)).toEqual(1)
    });

  });

});
