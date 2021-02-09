class Javabuzz {
  _isDivisibleBy(number, divisor) {
     return (number % divisor === 0);
   };

  play(number) {
    if (this.isDivisibleByFifteen(number)) {
      return "JavaBuzz"
    } else if (this.isDivisibleByThree(number)) {
      return "Java"
    } else if (this.isDivisibleByFive(number)) {
      return "Buzz"
    } else {
      return number;
    }
  };

}
