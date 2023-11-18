// Logical Operators
// OR(||) and And(&&) operator


// Student details
let student = prompt("Name of student")
let rollno = prompt("Roll Number")
let course = prompt("Course title")
let institute = prompt("Institute name")

// Student marks details
let html_score = Number(prompt("Enter score in HTML"))
let css_score = Number(prompt("Enter score in css"))
let js_score = Number(prompt("Enter score in js"))
let react_score = Number(prompt("Enter score in react"))
let python_score = Number(prompt("Enter score in python"))

//calculate percentage
let obtained = html_score + css_score + js_score + react_score + python_score;
let percentage = obtained / 500 * 100;

var grade = "";

if(percentage >= 90){
    grade = "A+";
}
else if(percentage >= 80){
    grade = "A";
}
else if(percentage >= 70){
    grade = "B";
}
else if(percentage >= 60){
    grade = "C";
}
else if(percentage >= 50){
    grade = "D";
}
else{
    grade = "F";
}

//alert("You obtained : " + obtained + "\nYour garde is: " + grade + "\nYour percentage is: " + percentage);
alert(`#########${institute}##########

    ___________________________________

    Student Name : ${student}
    Roll Number  : ${rollno}
    Course Title : ${course}
    
    Marks        : HTML  CSS  JS Python React 
                   ${html_score} ${css_score} ${js_score} ${python_score} ${react_score}

    You have obtained  :  ${obtained}
    Your grade is      : ${grade}
    Your percentage is : ${percentage}`) 

