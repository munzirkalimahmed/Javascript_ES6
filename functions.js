        // function declaration
// function greet_user(){

//     console.log("Welcome Mr. Asad")
// }

//          // calling a function

// greet_user()
// greet_user()
// greet_user()

//         // a function with parameter :parametrized function
// function greet_user(username){

//     console.log(`Welcome Mr. ${username}`)
// }

// greet_user('Ali')
// greet_user('')

// function konBaraHy(a,b){

//     if(a>b){
//         console.log("A is big")
//     }
//     else if (b>a){
//         console.log("B ig big")
//     }
//     else{
//         console.log("No one is big ")
//     }

// }

// konBaraHy(20,13)
// konBaraHy(20,20)

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

