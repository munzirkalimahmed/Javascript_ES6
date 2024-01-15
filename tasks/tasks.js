class Employee{
    constructor(fname, lname, experience, company){
        this.fname =fname
        this.lname = lname
        this.experience= experience
        this.company=company
    }
    // emp_details(){
    //     document.write(`
    //     Employee Name: ${this.fname} ${this.lname}<br>
    //     Employee Exp:  ${this.experience}<br>
    //     Company     : ${this.company}<br>
    //     ===============================================
    //     <br>
    //     `)
    // }
}

Employee.prototype.emp_details = function(){
    document.write(`
        Employee Name: ${this.fname} ${this.lname}<br>
        Employee Exp:  ${this.experience}<br>
        Company     : ${this.company}<br>
        ===============================================
        <br>
        `)

}

emp1 = new Employee('Ali','Shah',10,'Telenor')
emp2 = new Employee('Ahmed','Rehman',2,'Telenor')
emp3 = new Employee('Faisal','Saleem',4,'Telenor')
employee_list = [emp1,emp2,emp3]


for (i=0;i<employee_list.length;i++){
       employee_list[i].emp_details()
}


class PriceCalculator{
    #item1 = 99
    #item2 = 199

    constructor(quantity_item1, quantity_item2){

        this.q_item1 = quantity_item1
        this.q_item2 = quantity_item2
    }

    cost(){
        total = this.q_item1*this.#item1 + this.q_item2*this.#item2

        return total
    }
}

order1  = new PriceCalculator(1,1)
console.log(order1.cost())