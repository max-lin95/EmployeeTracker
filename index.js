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
               "View all departments",
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
            case "View all departments?":
                viewAllDepartments();
                break;

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

// viewAllDepartments Function
function viewAllDepartments() {
    connection.query(
        "SELECT department.id AS id, department.name AS department FROM department";
        function(err, res) {
            if (err) throw err
            console.table(res)
            promptStart()
        });    
}

// viewAllRoles Function
function viewAllRoles() {
    connection.query("SELECT role.id, role.title, role.salary, department.name AS department FROM role INNER JOIN department ON role.department_id = department.id";
        function(err, res) {
            if (err) throw err
            console.table(res)
            promptStart()
        });
}

// viewAllEmployees Function
function viewAllEmployees() {
    connection.query("SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name AS department, CONCAT(manager.first_name, " ", manager.lastname) AS manager FROM employee JOIN role ON employee.role_id = role.role_idJOIN department ON role.department_id = department.role_idJOIN employee manager ON employee.manager_id = manager.id";
        function(err, res) {
            if (err) throw err
            console.table(res)
            promptStart()
        });
}

// addDepartment Function
function addDepartment() {
    inquirer.prompt([
        {
            name: "addDpt",
            type: "input",
            message: "What department would you like to add?",
        }
    ]).then(function(res) {
        var query = connection.query("INSERT INTO department SET ?",
            function(err, res) {
                if (err) throw err
                console.table(res);
                promptStart();
            }
        )
    })
}

// addRole function
function addRole() {
    connection.query("SELECT role.title AS title, role.salary AS salary FROM role",
        inquirer.prompt{[
            {
                name: "title",
                type: "input",
                message: "What is the title of the role?"
            },
            {
                name: "salary",
                type: "input",
                message: "What is this role's salary?",
            }
        ]}.then(function(res) {
            connection.query("INSERT INTO role SET?",
            {
                title: res.title,
                salary: res.salary,
            },
            function(err) {
                if (err) throw err
                console.table(res);
                promptStart();
            }
            )
        });
    );
}

// addEmployee Function
function addEmployee() {
    inquirer.prompt([
        {
            name: "firstName",
            type: "input",
            message: "What is the employee's first name?",
        },
        {
            name: "lastName",
            type: "input",
            message: "What is the employee's last name?",
        },
        {
            name: "employeesManager",
            type: "list",
            message: "Who is the employee's manager?",
            choices: managers
        }
    ])
        .then(managersChoices => {
            const managers = managersChoices.managers;
            params.push(manager);
            connection.query("INSERT INTO employee (employee.first_name, employee.last_name, role.id, manager.id",
                function(err, res) {
                    if (err) throw err
                    console.table(res);
                    promptStart();
            )  
        });
}




