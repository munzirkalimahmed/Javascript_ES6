function mycode() {

    alert("Hello I am a function")
    
}

function adding(a,b) {
    document.write(`sum of ${a} and ${b} numbers is: ${a+b}`)
}

function printname(n){
    document.write(`Your name is ${n}`)
}

function printname(){

    var name = prompt("Enter your name")

    document.write(`Your name is ${name}`)
}

function calculation(a,b) {
    document.write(`sum of ${a} and ${b} numbers is: ${a+b}<br>`)

    document.write(`difference of ${a} and ${b} numbers is: ${a-b}<br>`)

    document.write(`Multiplication of ${a} and ${b} numbers is: ${a*b}<br>`)

    document.write(`division of ${a} and ${b} numbers is: ${a/b}<br>`)
    
}

function Findmax(arr) {

     max = Math.max(...arr)
     min = Math.min(...arr)
    document.write("Your maximum number is ", max)
    document.write("<br>Your minimum number is ", min)
    
}

function Findsum(arr) {

    sum = 0
    for (let i = 0; i < arr.length; i++) {
         sum = sum + arr[i];
        
    }
   document.write("<br>Your sum is ", sum)
   
}

function makeFieldYellow() {
    document.getElementById('emailInput').style.backgroundColor='yellow';
    
}

function makeFieldWhite() {
    document.getElementById('emailInput').style.backgroundColor='white';
}

let emails = ['munzir.kalim1@gmail.com','khalil@gmail.com','ali@gmail.com']

let passwords = ['12345','munni123','ran998877','pak765']


function checkAddress(email,password) {

    let useremail = document.getElementById(email).value 
    let userpassword = document.getElementById(password).value
    if( useremail !== "" && userpassword !== ""){

        if(emails.includes(useremail) && passwords.includes(userpassword)){
           document.write(`Welcome user  ${useremail}`)
        }
        else{
            alert("Invalid Email address and password")
        }
        
    }
    else{
        alert("Email address required");
    }

    
}

function fillCity() {
    var cityName;
    var zipEntered = document.getElementById("zip").value;
    switch (zipEntered) {
        case "60608":
            cityName = "Chicago"
            break;
        case "68114":
            cityName = "Omaha"
            break;
        case "53212":
            cityName = "Milwaukee"
            break;
        default:
            cityName = "None"
    }
    document.getElementById("city").value = cityName;
}

function std_data() {
    var name,degree,semester,cgpa
    var id = document.getElementById('std_id').value;

    switch (id) {
        case "3234":
            name = "Munzir"
            degree = "Software Engineering"
            semester = 7
            cgpa = 3.0
            break;
        case "4567":
            name = "Rafay"
            degree = "Computer Science"
            semester = 5
            cgpa = 2.7
            break
    
        default:
            name = "0"
            degree = "0"
            semester = "0"
            cgpa = "0"
            break;
    }
    document.getElementById("name").value = name;
    document.getElementById("degree").value = degree;
    document.getElementById("semester").value = semester;
    document.getElementById("cgpa").value = cgpa;

    
}