// CREATE FUNCTION GO HERE????
const connection = require("./connection")

class DBMNGMT {
    constructor(connection) {
        this.connection = connection
    }

    createDepartment(department) {
        return this.connection.promise().query("INSERT INTO department SET ?", department);
    }
}

module.exports = new DBMNGMT(connection);