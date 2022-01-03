INSERT INTO department
    (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Human Resources');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Salesperson', 80000, 1),
    ('Sales Lead', 100000, 1),
    ('Lead Engineer', 150000, 2),
    ('Software Engineer', 120000, 2),
    ('Account Manager', 160000, 3),
    ('Accountant', 125000, 3),
    ('Human Resources Manager', 20, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Harry', 'Potter', 1, NULL),
    ('Hermoine', 'Granger', 2, 1),
    ('Ronald', 'Weasley', 3, NULL),
    ('Severus', 'Snape', 4, 3),
    ('Albus', 'Dumbledore', 5, NULL),
    ('Draco', 'Malfoy', 6, 5),
    ('Lord', 'Voldemort', 7, NULL),
    ('Tom', 'Riddle', 8, 7);