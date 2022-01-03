// GIVEN a command-line application that accepts user input
// WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids
// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager and that employee is added to the database
// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database 

const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: 'root',
    password: 'J147c14z!',
})

connection.connect((err) => {
    if (err) throw err;
    console.log("Connected");
});

const actionPrompt = () => {

    // create inquirer prompt so user can select which action they want to do,
    // view departments
    // view coles
    // view employees
    // add a department
    // add a role
    // ad an employee
    // update an employees role

    // pass selection into var 

    // compare var to different functions for switching
}

function viewDepartments() {
    console.log("Viewing all departments");
    // sql command

    connection
    // .promise stuff ()
}

function viewRoles() {
    console.log("Viewing all roles!")
    // sql command

    connection
    // .promise stuff ()

}

function viewEmployees() {
    console.log("Viewing all employees");
    // sql command

    connection
    // .promise stuff ()
}

function addDepartment() {
    // inquirer prompt

    //.then

    //promise

}

function addRole() {
    // inquirer prompt

    //.then

    //promise

}

function addEmployee() {
    // inquirer prompt

    //.then

    //promise
}

function updateRole() {
    // inquirer prompt

    //.then

    //promise

}