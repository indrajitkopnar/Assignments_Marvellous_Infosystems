//Assignment1Q3
function DisplayFactors(num: number): void {
    console.log("factors of given number: " + num);
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        console.log(i);
      }
    }
  }
  
  const num = 20;
  DisplayFactors(num);
  