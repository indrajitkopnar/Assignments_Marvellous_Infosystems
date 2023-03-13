//Assignment1Q5
function fibonacci(n: number): void {
    let prev = 0;
    let curr = 1;
  
    while (curr <= n) {
      console.log(curr);
      const next = prev + curr;
      prev = curr;
      curr = next;
    }
  }
  
  fibonacci(21);
  
  