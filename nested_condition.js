// Nested loop

// vote
// - election day 
// - voter list
// - valid cnic

// if above conditions are true you can cast vote

day = prompt("Is today election day")


if(day == 'yes'){

    list = prompt("Your name in list?")

    if (list == 'yes') {

        cnic = prompt("Do you have valid CNIC?")
        
        if (cnic == 'yes') {
            alert("you can cast the vote")
        }
        else{
            alert("you cannot cast the vote")
        }

    }
    else{
        alert("you cannot cast the vote")
    }
}
else{
    alert("you cannot cast the vote")
}