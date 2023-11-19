// collection of values

let students = ['Munzir', 'Hussain', 'Kaleem', 'Hussain', 'Shakir']
// indices/index

// alert(students[1])
// alert(students[3])
// alert(students[7])

console.log(students[8])
console.log(students[0].length)
console.log(students[0].toLowerCase())

console.log(students.length)

console.log(students.concat(['Rehan', 'Fazal', 'Masood']));

students.push('Tahir');
console.log(students);

students.push('Hameed','Hakim');
console.log(students);

students.pop(students[1]);  //last wala remove kariega
console.log(students);

students[6] = 'hamid';
console.log(students);

students.shift();   //first wala remove kariega
console.log(students);

students.unshift("Ahmed");   //first mein insert kariega
console.log(students);

students.splice(3,2,'A','B','C');  //splice(position,position aur ussy agy values ko delete karna, position py values add karna)
console.log(students);

let std1 = students.slice(2,5)  //uthny index ki copy bana kay dhekhata hain
console.log(std1);

let std2 = students[1].slice(2,5);
console.log(std2);

let std3 = students[0][3]
console.log(std3);


let txt = prompt("Enter your text");
let words = txt.split(" ").length

alert(`The text you provided has ${txt.length}characters
The text you provided has ${words}characters`)





