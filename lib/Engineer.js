const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email, "Engineer");
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }

    html() {
        return `
            <div class="card m-1 shadow" style="width: 18rem">
                <div class='card-header'>
                <h3 class="card-title">${this.name}</h3>
                <h6 class="card-text"><i class="fa fa-laptop"></i> ${this.role}</h6>
                </div>
                <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${this.id}</li>
                    <li class="list-group-item">Email: ${this.email}</li>
                    <li class="list-group-item">GitHub: ${this.github}</li>
                </ul>
                </div>
            </div>
            `
    }
}

module.exports = Engineer;
