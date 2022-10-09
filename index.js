// Dependencies 
const inquirer = require("inquirer")
const mysql = require("mysql")
const cTable = require("console.table");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "DBpassword",
    database: "employeeTrackerDB",
});

// Connect Error
connection.connect(function(err) {
    if (err) throw err
    console.log("Connected as ID" + connection.threadId);
    afterConnection();
});

// Prompt
function promptStart() {
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            name: "choices",
            choies: [
               "View all roles", 
               "View all employees",
               "Add a department",
               "Add a role",
               "Add an employee",
               "Update an employee role",
            ]
        }
    ]).then(function(val) {
        switch(val.choice) {
            case "View all employee roles?":
                viewAllRoles();
                break;

            case "View all employees?":
                viewAllEmployees();
                break;
            
            case "Add a department?":
                addDepartment();
                break;

            case "Add a role?":
                addRole();
                break;

            case "Add an employee?":
                addEmployee();
                break;

            case "Update an employee role?":
                addEmployeeRole();
                break;
        }
    })
}

