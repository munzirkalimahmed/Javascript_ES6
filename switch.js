let day_of_week1 = prompt('Enter the day of week')

switch(day_of_week1){

    case 'monday':
        console.log("Gym Chest Day")
        break;
    case 'tuesday':
        console.log("Wings Day")
        break;
    case 'wednesday':
        console.log("Biceps Day")
        break;
    case 'thusday':
        console.log("Tricept")
        break;
    case 'friday':
        console.log("Shoulder Day")
        break;
    case 'saturday':
        console.log("Mix Day")
        break;
    case 'sunday':
        console.log("off Day")
        break;
    default:
        console.log("Enter a valid day");
}

let day_of_week = prompt('Enter the day of week').toLowerCase()

switch(true){

    case day_of_week == 'mon' || day_of_week == 'monday':
        console.log("Gym Chest Day")
        break;
    case day_of_week == 'tue' || day_of_week == 'tuesday':
        console.log("Wings Day")
        break;
    case day_of_week == 'wed' || day_of_week == 'wednesday':
        console.log("Biceps Day")
        break;
    case day_of_week == 'thu' || day_of_week == 'thursday':
        console.log("Tricept")
        break;
    case day_of_week == 'fri' || day_of_week == 'friday':
        console.log("Shoulder Day")
        break;
    case day_of_week == 'sat' || day_of_week == 'saturday':
        console.log("Mix Day")
        break;
    case day_of_week == 'sun' || day_of_week == 'sunday':
        console.log("off Day")
        break;
    default:
        console.log("Enter a valid day");
}

let percentage = Number(prompt('Enter your percentage'));

switch (true) {
    case percentage > 100:
        console.log("Your grade is A+");
        break;
    case percentage >= 90:
        console.log("Your grade is A");
        break;
    case percentage >= 80:
        console.log("Your grade is B");
        break;
    case percentage >= 70:
        console.log("Your grade is C");
        break;
    case percentage >= 60:
        console.log("Your grade is D");
        break;
    default:
        console.log("Your grade is F");
}


var today = new Date()
alert(today)
alert(today.getDate());
alert(today.getDay());

var asad_valima_day = new Date("Jan 30, 2025, 4:20")
alert(valima_day);


