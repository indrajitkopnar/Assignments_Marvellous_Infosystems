// Assignment3Q1
class Arithmatic{
No1:number;
No2:number;

constructor(A:number, B:number)
{
    this.No1=A;
    this.No2=B;

}

Addition():number
{
    return this.No1+this.No2
}

Substraction():number
{
    return this.No1-this.No2

}

Multiplication():number
{
    return this.No1*this.No2
}

Division():number
{
    return this.No1/this.No2
}
}
var obj1 = new Arithmatic(30,20);
var obj2 = new Arithmatic(50,30);

var Ret : number = 0;

Ret = obj1.Addition();
console.log("addition for obj1 is: " + Ret);
Ret = obj2.Addition();
console.log("addition for obj2 is: " + Ret);

Ret = obj1.Substraction();
console.log("substraction is: " + Ret);
Ret = obj2.Substraction();
console.log("substraction for obj2 is: " + Ret);

Ret = obj1.Multiplication();
console.log("multiplication for obj1 is: " + Ret);
Ret = obj2.Multiplication();
console.log("multiplication for obj2 is: " + Ret);

Ret = obj1.Division();
console.log("Division for obj1 is: " + Ret);
Ret = obj2.Division();
console.log("Division for obj2 is: " + Ret);




