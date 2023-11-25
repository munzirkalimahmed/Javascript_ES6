// ##############  Loops ####################

// for loop
// while loop
// do while loop

// write names ten times

for(a=0; a<10; a++){

    console.log(a, "Munzir Kalim");

}
 
// make a array guests and print names of guests one by one with their counts

let guests = ['Munzir kaleem','Rafay Ullah','Shaheer','Arham','Basit' ,'ahmed']

for(let a=0; a<5; a++){
    console.log(a, guests[a])
}

// if we change any changes or add values to array guest then we want to by default length so we use guests.length.

for(let a=0; a<guests.length; a++){
    console.log(a, guests[a])
}

// if we want to invite those whose character length is less than 10

for(let a=0; a<guests.length; a++){
    if (guests[a].length < 10) {
        console.log(`Mr. ${guests[a]} you are invited to my house for meeting`)

    }
    else{
        console.log(`Mr. ${guests[a]} you are not invited to my house for meeting`)
    }
}


// invite those whose name starts from 'a'

//Method-01 with charAt

for(let a=0; a<guests.length; a++){
    if (guests[a].charAt(0).toUpperCase() == 'A') {
        console.log(`Mr. ${guests[a]} you are invited to my house for meeting`)

    }
    else{
        console.log(`Mr. ${guests[a]} you are not invited to my house for meeting`)
    }
}


//Method-02 with startsWith

for(let a=0; a<guests.length; a++){

    if (guests[a].startsWith('A') || guests[0].startsWith('a')) {

        console.log(`Mr. ${guests[a]} you are invited to my house for meeting`)

    }
    else{
        console.log(`Mr. ${guests[a]} you are not invited to my house for meeting`)
    }

}

// Method 3 with guests index 

for(let a=0; a<guests.length; a++){

    if (guests[a][0].toUpperCase() == 'A') {
        console.log(`Mr. ${guests[a]} you are invited to my house for meeting`)
    }

    else{
        console.log(`Mr. ${guests[a]} you are not invited to my house for meeting`)
    }
}

//input text from user and print txt length of numbers and second print txt length of words

let txt = prompt("Enter your text");

console.log(`The numbers of characters in your text are: ${txt.length}`);
console.log(`The numbers of words in your text are: ${txt.split(' ').length}`);






