const Employee = require("./Employee");

class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email, "Intern");
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }

    html() {
        return `
            <div class="card m-1 shadow" style="width: 18rem">
                <div class='card-header'>
                <h3 class="card-title">${this.name}</h3>
                <h6 class="card-text"><i class="fa fa-graduation-cap"></i> ${this.role}</h6>
                </div>
                <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${this.id}</li>
                    <li class="list-group-item">Email: ${this.email}</li>
                    <li class="list-group-item">School: ${this.school}</li>
                </ul>
                </div>
            </div>
            `
    }
}

module.exports = Intern;
