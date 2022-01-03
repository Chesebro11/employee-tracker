// CREATE FUNCTION GO HERE????
const connection = require("../server")

function createDepartment(res) {
    return this.connection.promise().query("INSERT INTO department SET ?", res);
}

module.exports = { createDepartment }