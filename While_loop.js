
for (let a = 1; a <= 5; a++) {
      console.log(a);
    
}

a = 1;
while (a <= 5) {
    console.log(a);
    a++;
}

let dishes1 = [];

for (let a = 1; a < 5; a++) {
     fav_dish = prompt("Tell me your favourite dish name");
        dishes.push(fav_dish);
}
console.log(dishes);

let dishes = [];

for (let a = 1; a < 5; a++) {
     fav_dish = prompt("Tell me your favourite dish name or press q to quit");
     if(fav_dish != 'q'){
        dishes.push(fav_dish);

     }
     else{
        break;
     }
}
console.log(dishes);

//jitna defined loop hain usky size ko increase nhi karskty

counter = 0;
while (counter < 10) {

    square = counter**2;
    if(square > 50){
        break;
    }
    else{
        console.log(square);
        counter++;
    }

    
    
}

counter = 0;
while (counter < 10) {

    counter += 2;
    square = counter**2;
    if(square > 50){
        break;
    }
    else{
        console.log(square);
        
    }

    
    
}

counter = 10;
while (counter > 0) {

    counter --;
    square = counter**2;
    if(square < 5){
        break;
    }
    else{
        console.log(square);
        
    }

    
    
}

dishes = []
flag = true;

while (flag) {
    dishname = prompt("Enter dishname or press q to quit")
    if(dishname == 'q'){
        flag=false;
    }
    else{
        dishes.push(dishname)
    }
}
console.log(dishes)


var a = 10;
var b = 20;

while(b>a){
    console.log("bbbbb")
    a = a+10;
}


flag = true;

while(flag){
    console.log("bbb");
    flag = false;
}


while(true){
    console.log("bbb");
    break;
}




