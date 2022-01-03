// CREATE FUNCTION GO HERE????
const connection = require("./connection")

class DBMNGMT {
    constructor(connection) {
        this.connection = connection
    }

    selectDepartments() {
        return this.connection.promise().query("SELECT * FROM department");
    }

    createDepartment(department) {
        return this.connection.promise().query("INSERT INTO department SET ?", department);
    }

    selectRoles() {
        return this.connection.promise().query("SELECT * FROM role");
    }

    selectEmployees() {
        return this.connection.promise().query("SELECT * FROM employee");
    }
}

module.exports = new DBMNGMT(connection);