// A student can appear in exam if and only if 


var class_appearence = Number(prompt("Enter no.of days you appear in class"));
var percentage = class_appearence/120 *100;


if (percentage >= 70) {
    let std_examfee = prompt("Has you pay your fee?");
    if(std_examfee == 'yes')
    {
        let std_examcenter = prompt("Has he reached at exam center");
        if(std_examcenter == 'yes')
        {
            

            alert(`Your no of days appear in class: ${class_appearence} 
        Your percentage of day appearence in class: ${percentage} 
        You can sit in the exam now`)

        }
        else{
            alert("You are not in exam center");
        }
    }
    else{
        alert("You are fee is not pay");
    }
}
else
{
    alert("your attendence is less than 70")
}



