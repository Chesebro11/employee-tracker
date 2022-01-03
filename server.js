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

const inquirer = require('inquirer');
const DBMNGMT = require('./db')
const consoleTable = require('console.table');
const db = require('./db');



function actionPrompt() {
    console.log('===============');
    console.log("|  Database12  |");
    console.log("|              |");
    console.log("===============");
    console.log("Start Employee Tracker 3000");

    inquirer
        .prompt([
            {
                type: "list",
                name: "choices",
                message: "What would you like to do?",
                choices: [
                    "view departments",
                    "view roles",
                    "view employees",
                    "add a department",
                    "add a role",
                    "add an employee",
                    "update an employees role",
                    "quit",
                ],
            },
        ])
        .then((res) => {
            let pick = res.choices;
            console.log(pick);

            switch(pick) {
                case"view departments":
                viewDepartments();
                break;
            }

            switch(pick) {
                case"view roles":
                viewRoles();
                break;
            }

            switch(pick) {
                case"view employees":
                viewEmployees();
                break;
            }
            
            switch(pick) {
                case"add a department":
                addDepartment();
                break;
            }

            switch(pick) {
                case"add a role":
                addRole();
                break;
            }
        });
}

function viewDepartments() {
    console.log("Viewing all departments");
    DBMNGMT.selectDepartments()
        .then(([rows]) => {
            let departments = rows
            console.table(departments);
            actionPrompt();
        });
    };

function viewRoles() {
    console.log("Viewing all roles!")
    DBMNGMT.selectRoles()
        .then(([rows]) => {
            let roles = rows
            console.table(roles);
            actionPrompt();
        });
}

function viewEmployees() {
    console.log("Viewing all employees");
    DBMNGMT.selectEmployees()
        .then(([rows]) => {
            let employees = rows
            console.table(employees);
            actionPrompt();
        })
}

function addDepartment() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the name of the department",
        },
    ])
    .then(res => {
        console.log(res)
        DBMNGMT.createDepartment(res)
        console.log("Added new database!");
        actionPrompt();
    });
}


function addRole() {

    DBMNGMT.selectDepartments()
    .then(([rows]) => {
        let departments = rows;
        const departmentChoices = departments.map(({ id, name }) => ({
            name: name,
            value: id
        }));
    
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Please enter the title of the Role'
        },
        {
            type: 'input',
            name: "salary",
            mesage: "Please input the Salary"

        },
        {
            type: 'list',
            name: 'department_id',
            message: "Please select which department this role belongs to",
            choices: departmentChoices

        }
    ])
    .then(res => {
        DBMNGMT.createRole(res)
        console.log("Created a new role!");
        actionPrompt();
    })
})

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

actionPrompt();