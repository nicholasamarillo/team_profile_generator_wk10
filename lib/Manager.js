const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email, "Manager");
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }

    html(){
        return`
            <div class="card m-1 shadow" style="width: 18rem">
                <div class='card-header'>
                <h3 class="card-title">${this.name}</h3>
                <h6 class="card-text"><i class="fa fa-coffee"></i> ${this.role}</h6>
                </div>
                <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${this.id}</li>
                    <li class="list-group-item">Email: ${this.email}</li>
                    <li class="list-group-item">Office Number: ${this.officeNumber}</li>
                </ul>
                </div>
            </div>
        `
    }

}

module.exports = Manager;
