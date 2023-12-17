function mycode(){
    document.write('Hello I am a response of an event')
}



function adding(a,b){
    document.write(`Sum of the two numbers ${a} and ${b} is <br> ${a+b}`)
}

function differencing(a,b){
    document.write(`Difference of the two numbers ${a} and ${b} is <br> ${a-b}`)
}
function multiplying(a,b){
    document.write(`Product of the two numbers ${a} and ${b} is <br> ${a*b}`)
}

function findSum(arr){

    var sum = 0 
    for(a=0;a<arr.length;a++){
        sum +=arr[a];
    }
   document.write(`The sum of the array ${arr} is ${sum}`)
}
