/*eslint-env browser*/

/*eslint-env browser*/

function displayMenu() {
    "use strict";
    window.console.log("Welcome to Employee Management System");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("show - Show all employees");
    window.console.log("add - Add a new employee");
    window.console.log("del - Delete an existing employee");
    window.console.log("exit - Exit the application");
    window.console.log("");
}

function showEmployees(arr) {
    "use strict";
    var i = 1;
    arr.forEach(function (employee) {
        window.console.log(String(i) + ". " + employee);
        i += 1;
    });
    window.console.log("Showing employees");
}

function addEmployee(arr) {
    "use strict";
    var employee = window.prompt("Enter the employee\'s name");
    arr.push(employee);
    window.console.log(employee + " was added.\n");
    window.console.log("Adding employees");
}

function deleteEmployee(arr) {
    "use strict";
    var num;
    num = parseInt(window.prompt("Employee Number to delete"), 10);
    if (num < 1 || num > arr.length) {
        window.alert("Invalid number!");
    } else {
        delete arr[num - 1];
        window.console.log("Employee number " + num + " was deleted.");
    }
    window.console.log("Deleting employees");
}

function main() {
    "use strict";
    var employeeList, command;
    
    var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};
    
    displayMenu();
    
    employeeList = ["Zak Rulavcava",
                   "Sally Satel",
                   "Fred Frankl",
                   "Jimmy Jones",
                   "Lena Lubovich"];
    
    while (true) {
        command = window.prompt("Enter command");
        if (command !== null) {
            if (command === "show") {
                showEmployees(employeeList);
            } else if (command === "add") {
                addEmployee(employeeList);
            } else if (command === "del") {
                deleteEmployee(employeeList);
            } else if (command === "exit") {
                break;
            }
        } else {
            window.console.log("That is not a valid command");
        }
    }
    window.console.log("Program terminated.");
}

main();
