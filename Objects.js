let person = {
    gender:'Male',
    age: 23,
    name: 'nasir',
    qualification: 'Graduate',
    contact: 1234567
}

console.log(person)

let student = {
    name: 'Munzir',
    age: 21,
    rollno : '20p0477',
    qualification: 'undergrad',
    degree: 'Software Engineering'

}

console.log(student)


//#######Operations on object#######

/* Access properties
update properties
delete properties
add properties

*/

console.log(person.name)
console.log(person.gender)
console.log(person['contact'])


console.log(student.name)
console.log(student['degree'])


//Update an objects Properties

person.contact = '03363820715'
console.log(person.contact)

person.age = 32
console.log(person.age)

console.log(person)

// delete an objects property

delete person.age
console.log(person)

// Add an objects property

person.marital_status = 'Married'
person.nationality = 'Pakistani'
console.log(person)


// looping and object properties via for in loop
console.log("Person Data")
for(key in person){
    console.log(`${key} : ${person[key]}`)
}

for(key in person){
    if(key != 'qualification'){
        console.log(`${key} : ${person[key]}`)

    }
}



console.log("Student Data")
for(value in student){
    console.log(`${value} : ${student[value]}`)
}

let patient1 = {p_id:1, ward:'general',doctor:'Dr. Ali', disease: 'flu',age:54}

let patient2 = {p_id:2, ward:'general',doctor:'Dr. faisal', disease: 'cancer',age:78}

let patient3 = {p_id:3, ward:'general',doctor:'Dr. Saleem', disease: 'bp',age:76}

let patient4 = {p_id:4, ward:'general',doctor:'Dr. Hamid', disease: 'HCV',age:65}

let patient5 = {p_id:5, ward:'general',doctor:'Dr. Hassan', disease: 'sugar',age:55}

let patient6 = {p_id:6, ward:'general',doctor:'Dr. Hashim', disease: 'flu',age:45}


let patient7 = {p_id:7, ward:'general',doctor:'Dr. Nasir', disease: 'flu',age:60}

let patient8 = {p_id:8, ward:'general',doctor:'Dr. Banno', disease: 'flu',age:30}

let patient9 = {p_id:9, ward:'general',doctor:'Dr. Ayesha', disease: 'flu',age:30}

let patient10 = {p_id:10, ward:'general',doctor:'Dr. Hania', disease: 'flu',age:40}

let patients = [patient1,patient2,patient3,patient4,patient5,patient6,patient7,patient8,patient9,patient10]

console.log(patients)

for(let i=0; i<=patients.length; i++){

    //console.log(patients[i])

    for(key in patients[i]){
        if(key == 'disease'){
            if(patients[i][key] == 'flu'){
                console.log(`Those patients whose disease are flu, id: ${patients[i]['p_id']}, ward : ${patients[i]['ward']}, doctor : ${patients[i]['doctor']}`)
            }
        }
    }

}

// who are the doctors for cancer patients


for(i=0; i<=patients.length; i++){
    for(key in patients[i]){
        if(key == 'disease'){
            if(patients[i][key] == 'cancer'){
                console.log(`Those patients whose disease is cancer doctor name are: ${patients[i]['doctor']}`)
            }
        }
    }
}















