//Revision:

// let student = {
//     name : 'asad',
//     siblings : ['ammar','ayesha'],
//     address : {house:244,city:'peshawar'},
//     age : 23,
//     course : 'AICB',
//     gender : "Male"
// }

// for (key in student){
//     console.log(key, student[key])
// }

// console.log(student['siblings'][0])
// console.log(student['address'].city)

//document.write(student['siblings'][0])


//constructor function

// function Person(name,age,gender,cnic){
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.cnic = cnic;
// }

// let p1 = new Person("Munzir",21,"male","4210143267892");
// let p2 = new Person("Rafay",22,"male","3410143267892");

// p1.name = "Hamdan";

// console.log(p1);






/*let arr = ['kaleem','asad','hassan','faiz']

var person = {
    name:"kaleem",
     age:23,
}

person.siblings = ['imran', 'shah', 'fazal']
person.address = {house:50, PostCode:345677, Street:'4th',city:'Peshawar'}


//  console.log(person)

// person.name = 'Saleem'
// person['age'] = 33

var plan1 = 
{
    name: "Basic",
    price: 3.99,
    space: 100,
    transfer: 1000,
    pages: 10,
    discountMonths: [6, 7, 12]   
    // 20 percent disc>>> 80% percnt payment

    };

    function calcAnnual(perc)
    {
        var bestPrice = plan1.price;
        var currDate = new Date();
        var thisMo = currDate.getMonth()+1;
        
        for (var i = 0; i < plan1.discountMonths.length; i++) 
            {
            if (plan1.discountMonths[i] === thisMo) 
                {
                bestPrice = plan1.price * perc;
                break;
                }
            }
        return bestPrice * 12;
     }

     var annualPrice = calcAnnual(.80);
     console.log(annualPrice)


     console.log(new Date('2023-01-24').getMonth())

     
var plan1 = 
    {
        name: "Basic",
        price: 3.99,
        space: 100,
        transfer: 1000,
        pages: 10,
        discountMonths: [6, 7, 12]  ,
        
        calcAnnual: function(perc)
            {
                var bestPrice = plan1.price;
                var currDate = new Date();
                var thisMo = currDate.getMonth()+1;
                
                for (var i = 0; i < plan1.discountMonths.length; i++) 
                    {
                    if (plan1.discountMonths[i] === thisMo) 
                        {
                        bestPrice = plan1.price * perc;
                        break;
                        }
                    }
                return bestPrice * 12;
            }  ,
        showproperties:  function() {
            
            for(key in plan1){

            console.log(` keys are ${key} :  ${plan1[key]}`)

        }
    }
    };


    console.log(plan1.calcAnnual(.50))
    plan1.showproperties()
    arr = Array(1,2,3,4,5,6) // Array is array constructor
    arr1 = [1,2,3,4,5,6,7]
    // console.log(arr)
    // console.log(arr1)


    function Plan(name, price, space, transfer, pages) {
        this.name = name;
        this.price = price;
        this.space = space;
        this.transfer = transfer;
        this.pages = pages;
        this.service_provider = "Connect"
        }

    my_plan = new Plan('Advance',10.99, 1000,5000,10)
    your_plan = new Plan('Basic',4.99,300,1000,4)

    console.log(my_plan)
    console.log(your_plan)*/

    function Plan(name, price, space, transfer, pages,discountMonths) {
        this.name = name;
        this.price = price;
        this.space = space;
        this.transfer = transfer;
        this.pages = pages;
        this.discountMonths = discountMonths,
        this.calcAnnual = function(perc)
        {
            var bestPrice = my_plan.price;
            var currDate = new Date();
            var thisMo = currDate.getMonth()+1;
            
            for (var i = 0; i < my_plan.discountMonths.length; i++) 
                {
                if (my_plan.discountMonths[i] === thisMo) 
                    {
                    bestPrice = my_plan.price * perc;
                    break;
                    }
                }
            return bestPrice * 12;
        } 
    }

    my_plan = new Plan('Advance',10.99, 1000,5000,10,[1,6,12])
    your_plan = new Plan('Basic',4.99,300,1000,4,[1,6,12])

    console.log(my_plan)

    console.log(my_plan.calcAnnual(0.8))


    
    // function Person(name){
    //     this.name = name
    // }

    // Plan.prototype.calcAnnual = function(percentIfDisc) 
    // {
    //     var bestPrice = this.price;
    //     var currDate = new Date();
    //     var thisMo = currDate.getMonth();
    //     for (var i = 0; i < this.discountMonths.length; i++) 
    //         {
    //         if (this.discountMonths[i] === thisMo) 
    //             {
    //                 bestPrice = this.price * percentIfDisc;
    //                 break;
    //              }
    //         }
    //     return bestPrice * 12;
    // };
    // my_plan = new Plan('Advance',10.99, 1000,5000,10,[1,6,12])
    // your_plan = new Plan('Basic',4.99,300,1000,4,[1,6,12])

    // console.log(my_plan.calcAnnual(.60))
    // my_person = new Person('raazia')
    // my_person.calcAnnual(.50) // it will throw error: not a function

    
    // var plan1 = 
    // {
    //     name: "Basic",
    //     price: 3.99,
    //     space: 100,
    //     transfer: 1000,
    //     pages: 10,
    //     discountMonths: [6, 7, 12],
        
    //     calcAnnual: function(perc)
    //         {
    //             var bestPrice = plan1.price;
    //             var currDate = new Date();
    //             var thisMo = currDate.getMonth()+1;
                
    //             for (var i = 0; i < plan1.discountMonths.length; i++) 
    //                 {
    //                 if (plan1.discountMonths[i] === thisMo) 
    //                     {
    //                     bestPrice = plan1.price * perc;
    //                     break;
    //                     }
    //                 }
    //             return bestPrice * 12;
    //         }  ,
    //     showproperties:  function() {
            
    //         for(key in plan1){

    //         console.log(` keys are ${key} :  ${plan1[key]}`)

    //     }
    // }
    // };

   

    // console.log(plan1.calcAnnual(.50))
    // plan1.showproperties()
   