//Assignment2Q1
function Maximum(numbers: number[]): number {
    let largestNumber: number = numbers[0]; 
  
   
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > largestNumber) {
        largestNumber = numbers[i];
      }
    }
  
    return largestNumber;
  }
  
 
  const numbers: number[] = [23, 89, 6, 29, 56, 45, 77, 32];
  const largestNumber: number = Maximum(numbers);
  console.log("The largest number is: " + largestNumber); 
  