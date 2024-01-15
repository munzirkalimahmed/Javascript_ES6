let person1 = {
    name : 'nasir',
    age :23,
}

function Person(name,age,city,course){
    this.name = name
    this.age = age
    this.city = city
    this.course =course
}


class Student{
    #name;
    #age;
    #city;
    #course;
    #gender;
    #institute;

    constructor (name,age,city,gender,course){
        this.#name = name
        this.#age = age
        this.#city = city
        this.#course =course
        this.#gender = gender
        this.#institute = 'SMIT'

    }

    get name(){
        return this.#name
    }

    set name(new_name){
        if (new_name==='hamza'){
            console.log(`You can have not a name ${new_name}`)
        }
        else{
            this.#name = new_name
        }

        
    }


}


s1 = new Student('asad',23,'Lahore','Male','AI')
s2 = new Student('rehan',23,'Lahore','Male','AI')
s3 = new Student('sana',23,'Lahore','Male','AI')


//         ############Encapsulation##############

class Vehicle 
    {
        constructor(color, currentSpeed, maxSpeed) 
            {
                this.color = color;
                this.currentSpeed = currentSpeed;
                this.maxSpeed = maxSpeed;
                }
        move() 
            {
                console.log("moving at", this.currentSpeed);
            }
        accelerate(amount) 
            {
                this.currentSpeed += amount;
            }
        musicplayer(){
            console.log("Dhom Macha lay Dhom!!!!!")
        }
    }

    class Motorcycle extends Vehicle 
        {
            constructor(color, currentSpeed, maxSpeed, fuel) 
                {
                super(color, currentSpeed, maxSpeed);
                this.fuel = fuel;
                 }
        doWheelie() 
            {
            console.log("Driving on one wheel!");
        }

        musicplayer(){
            console.log("Kulllu haramm !!!!!")
        }
            }
        

    m1 = new Motorcycle('Black',0,150, 'Petrol')
    v1 = new Vehicle('Black',0,150)

    
