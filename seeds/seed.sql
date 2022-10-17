INSERT INTO department (name)
VALUES 
("IT"),
("Finance"),
("Sales"),
("Operations");


INSERT INTO role (title, salary, department_id)
VALUES
("Network Admin", 90000, 1),
("IT Specialist", 75000, 1),
("Staff Accountant", 85000, 2),
("Accountant", 65000, 2),
("Sales Manager", 80000, 3),
("Account Executive", 60000, 3),
("Operations Manager", 85000, 4),
("Supply Chain Specialist", 70000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("Tom", "Jones", 1, null),
("Bob", "Anderson", 4, 1),
("Mary", "Johan", 3, null),
("Ashley", "Barnett", 2, 3),
("Jennifer", "Mooris", 6, null),
("Anita", "Gomez", 5, 5),
("Barry", "Allen", 8, null),
("Samantha", "Greene", 7, 7);