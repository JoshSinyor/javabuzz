describe('Javabuzz', function() {

  var javabuzz;

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
        javabuzz = new Javabuzz();
        expect(javabuzz.isDivisibleBy3(3)).toBe(true);
    });

    it('divisible by 3', function() {
        javabuzz = new Javabuzz();
        expect(javabuzz.isDivisibleBy3(1)).toBe(false);
    });

  });

});
