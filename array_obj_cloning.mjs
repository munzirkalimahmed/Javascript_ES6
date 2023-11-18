
// copy ek hi addresspy hoty hain
let myNumbers = [5,4,3];
let myNumbersCopy = myNumbers;  //copy by reference, shallow copy

// let myNumbersClone = [myNumbers[0],myNumbers[1],myNumbers[2]];

let myNumbersClone = {...myNumbers};

console.log(myNumbers);
console.log(myNumbersCopy);
console.log(myNumbersClone);

myNumbersCopy[0] = "Munzir";

console.log(myNumbers);
console.log(myNumbersCopy);
console.log(myNumbersClone);


//copy dosry address py hoty hain
// let myNumb = ["cars"];
// let myNumbersCopy = myNumbers;  //copy by value

// console.log(myNumb);
// console.log(myNumbersCopy);

// myNumbersCopy[0] = "bus";

// console.log(myNumbers);
// console.log(myNumbersCopy);

let student1 = {

}