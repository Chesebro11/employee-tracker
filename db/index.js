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

    createEmployee(employee) {
        return this.connection.promise().query("INSERT INTO employee SET ?", employee)
    }

    createRole(role) {
        return this.connection.promise().query("INSERT INTO role SET ?", role)
    }

    updateEmployee(employee_id, role_id) {
        return this.connection.promise().query("UPDATE employee SET role_id = ? WHERE id = ?", [role_id, employee_id])
    }
}

module.exports = new DBMNGMT(connection);