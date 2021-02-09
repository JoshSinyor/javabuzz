describe('Javabuzz', function() {

  var javabuzz;

  beforeEach(function() {
    javabuzz = new Javabuzz();
  });

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
        expect(javabuzz.isDivisibleBy3(3)).toBe(true);
    });

    it('not divisible by 3', function() {
        expect(javabuzz.isDivisibleBy3(1)).toBe(false);
    });

    it('divisible by 5', function() {
        expect(javabuzz.isDivisibleBy5(5)).toBe(true);
    });

    it('not divisible by 5', function() {
        expect(javabuzz.isDivisibleBy5(1)).toBe(false);
    });

    it('divisible by by 15', function() {
        expect(javabuzz.isDivisibleBy15(15)).toBe(true);
    });

    it('not divisible by 15', function() {
        expect(javabuzz.isDivisibleBy15(3)).toBe(false);
    });

    it('not divisible by 15', function() {
        expect(javabuzz.isDivisibleBy15(5)).toBe(false);
    });

  });

});
