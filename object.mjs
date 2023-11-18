let myNumbers = [23, "bus", true];

let std1 = {
    "firstName": "Munzir",
    "lastName": "Kalim",
    "age":21,
    "isActive": true,
    "subjects": ["science","history","arts"],
    "contact" :{
        phone : "0343234567",
        email: "abc@gmail.com",
    }

    
}

console.log(std1);

console.log(std1["firstName"]);
console.log(std1["lastName"]);
console.log(std1["subjects"]);


// console.log(std1.firstName);
// console.log(std1.lastName);
// console.log(std1.subject);

// std1.firstName = "Muhammad"
std1["firstName"] = "Muhammad"

console.log(std1["firstName"]);
console.log(std1["lastName"]);
console.log(std1["subjects"]);


