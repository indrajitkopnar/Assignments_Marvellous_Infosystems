//Assignment1Q1
function Maximum(No1: number, No2: number, No3: number): number {
    var largest = No1;
    if (No2 > largest) {
      largest = No2; 
    }
    if (No3 > largest) {
      largest = No3;
    }
    return largest;
  }
  
   const result = Maximum(23, 89, 6);
  console.log("largest number is: " + result);
