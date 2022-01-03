// CREATE FUNCTION GO HERE????
const connection = require("./connection")

function createDepartment(department) {
    return this.connection.promise().query("INSERT INTO department SET ?", department);
  }

module.exports = new dbFunction (connection);