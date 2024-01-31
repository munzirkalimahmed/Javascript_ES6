
export class Branch{
    constructor(name,code,city,manager,contact,deposit){
        this.name = name;
        this.code = code;
        this.city = city;
        this.manager = manager;
        this.contact = contact;
        this.deposit = deposit;
    }

    get_branch(){
        return `Branch Name:    ${this.name}
                Branch Code:    ${this.code}
                Branch City:    ${this.city}
                Branch Manager: ${this.manager}
                Branch Contact: ${this.contact}
                Brach Deposit:  ${this.deposit}`
    }
}

