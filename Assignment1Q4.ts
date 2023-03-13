//Assignment1Q4
function ChkPrime(num: number): boolean {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  const num = 11;
  const isPrime = ChkPrime(num);
  
  console.log("if the given number is prime number? " + isPrime); 
  
  
