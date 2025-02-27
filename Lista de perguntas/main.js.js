class PrimeNumbersGenerator {
  constructor(limit) {
    this.limit = limit;
    this.primes = [2];
  }

  isPrime(number) {
    for (let prime of this.primes) {
      if (number % prime === 0) {
        return false;
      }
    }

    return true;
  }

  generatePrimeNumbers() {
    let number = 3;
    while (this.primes.length < this.limit) {
      if (this.isPrime(number)) {
        this.primes.push(number);
      }

      number += 2;
    }
  }
}

class PrintPrimeNumbersTable {
  constructor(primes, rowsPerPage = 50, colsPerPage = 4) {
    this.primes = primes;
    this.rowsPerPage = rowsPerPage;
    this.colsPerPage = colsPerPage;
  }

  printPrimeNumbers() {
    let pageNumber = 1;
    let index = 0;

    while (index < this.primes.length) {
      console.log(`\nPage ${pageNumber}\n`);

      for (let row = 0; row < this.rowsPerPage; row++) {
        let rowPrimes = [];

        for (let col = 0; col < this.colsPerPage; col++) {
          if (index < this.primes.length) {
            rowPrimes.push(this.primes[index]);
            index++;
          }
        }
        console.log(rowPrimes.join(" | "));
      }
      pageNumber++;
    }
  }
}

const primeGenerator = new PrimeNumbersGenerator(1000);
primeGenerator.generatePrimeNumbers();
const primePrinter = new PrintPrimeNumbersTable(primeGenerator.primes);
primePrinter.printPrimeNumbers();
