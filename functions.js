
function addition() {
    a=10;
    b=20;
    c= a+b;
    console.log(c);
  }

  addition()
  addition()
  addition()


  function addition(a,b) {
    c= a+b;
    console.log(c);
  }


  addition(10,20)
  addition(20,30)
  addition(30,40)


  function addition(a,b) {
    c= a+b;
    return c;
  }


ans = addition(10,20)
console.log(ans *20)
 

 
 //function declaration
function greet_user(){

    console.log("Welcome Mr. Asad")
}

// calling a function

greet_user()
greet_user()
greet_user()

// a function with parameter :parametrized function
function greet_user(username){

    console.log(`Welcome Mr. ${username}`)
}

greet_user('Ali')
greet_user('')

 function konBaraHy(a,b){

    if(a>b){
        console.log("A is big")
    }
    else if (b>a){
        console.log("B ig big")
    }
    else{
        console.log("No one is big ")
    }

}

konBaraHy(20,13)
konBaraHy(20,20)

// write a function tht calculate BMI.
// ask user his weight and height (bmi = w/h**2)
// 

function obese_calc(weight,height){
    bmi = weight / (height**2)
    if (bmi>=40){
        return "Obese"
    }
    else if (bmi>=25 && bmi<40){
        return "Over Weight"
    }
    else if(bmi>=18.5 && bmi<25){
        return "Normal"
    }
    else {
        return 'Under weight'
    }
}

let weight_kg = parseFloat(prompt("Please enter your weight in kg"))
let height_m = (parseFloat(prompt('Enter height in ft')))/3.3

console.log(`Dear Sir you are ${obese_calc(weight_kg,height_m)}`)
console.log(bmi)


// write a function that calculates tax over salary
// 100k > 15%      salary*.15
// 70k  > 10%              .10
// 50k >  5%               .05
// 30 >   2%               .02
// else 1%                 .01    

// if some one pays tax more than 2k say he is good citizen

function tax_calculator(s){
    if(s > 100000){
        return (s*0.15)
    }
    else if(s > 70000){
        return (s*0.10)

    }
    else if(s > 50000){
        return (s*0.05)

    }
    else if(s > 30000){
        return (s*0.02)

    }
    else{
        return (s*0.01)

    }
}

let salary = Number(prompt("Enter your salary"));

console.log(`Dear Sir your salary is: ${salary} and tax calculated is: ${tax_calculator(salary)}`);




