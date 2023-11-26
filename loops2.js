// ###  TASK  ###

// Enter 5 usernames which checks that user is not admin then checks username is already exists in array or not then checks the length of user more than 5 and less than 20 if these conditions are true then add to user name list otherwise display error.

let username = []

for(i=0; i<5; i++)
{
    let user = prompt("Enter username:");
    
        if(user != "Admin" && user != "admin" && user != "ADMIN")
        {
            if(username.includes(user))
            {
                alert("Already a username")
            }
            else{
                if(user.length >= 5 && user.length <= 20)
            {  
                {
                    username.push(user);
                    alert("User name added");
                }      
            } 
            else{
                alert("please give username more than 5 or less than 20")
            }
        }
            
        }
        else{
            alert("Invalid username")
        }
       
    }
console.log(username);


// let arr = ["A","B","C"]
// let char = prompt("Enter characters").toUpperCase()

// for (let i = 0; i < arr.length; i++) {
//         if(arr[i] == char)
//         {
//             console.log("Present");
//         }
//         else{
            
//         }
    
// }
// arr.push(char);
// console.log(arr);
