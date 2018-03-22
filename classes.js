/* 
  Once you complete a problem, refresh ./classes.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.

  Classes are a tool for building similar objects over and over again.
  They are a construct that helps your organize your code.

  Let's work with some employees at a company.
  You work for Widget Co. They have hundreds of employees.
*/

////////// PROBLEM 1 //////////

/*
  Make a class to help us build all of the employees.
  Each employee has the following properties:
    - first_name
    - last_name
    - email
    - age
  Each employee has the following methods:
    - makeWidget
      - This returns a string equal to the employees first name + last name + the word widget
      - Example: "Dave Smith Widget"

  Call your class Employee and receive all the data in the constructor in the order listed above.
*/

class Employee {
  constructor(first_name, last_name, email, age) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.age = age;
  }

  makeWidget() {
    return this.first_name + ' ' + this.last_name + ' Widget';
  }
}

////////// PROBLEM 2 //////////

/*
  Next, make a manager for Widget Co.
  The manager has all the same properties as an Employee.
  Each manager has the following additional properties:
    - reports (other employees) that defaults to an empty array
  Each manager has the following additional methods:
    - hire (employee)
      - Accepts a new employee as a parameter and pushes it to their list of reports.
    - fire (index)
      - Fire removes employees from their list of reports at the given index

  Call your new class Manager
*/

class Manager extends Employee {
  constructor(...args) {
    super(...args);
    this.reports = [];
  }

  hire(employee) {
    this.reports.push(employee);
  }

  fire(index) {
    this.reports.splice(index, 1);
  }
}

////////// PROBLEM 3 //////////

/*
  Managers for Widget Co. get promoted when they get more employees, and get a bonus when they fire employees.
  Progressive Managers have all the same properties as the manager,
  but they also have the following additional properties:
    - title - default 'Not a manager'
    - bonus - default 0

  When employees are added or removed we need to check and update their title. Their titles are as follows:
    0 : Not a manager
    1-3 : Barely Manager
    4-10 : Mostly Manager
    11-50 : Manager
    51-100 : Manager Plus
    101+ : Bestest Manager

  Everytime they fire an employee they get $100 added to their bonus.

  Call your new class ProgressiveManager
*/

class ProgressiveManager extends Manager {
  constructor(...args) {
    super(...args);
    this.title = 'Not a manager';
    this.bonus = 0;
  }

  hire(employee) {
    super.hire(employee);

    let numOfEmployees = this.reports.length;

    switch (true) { // using switch case for practice...
      case numOfEmployees === 0:
        this.title = 'Not a manager';
        break;
      case numOfEmployees >= 1 && numOfEmployees <= 3:
        this.title = 'Barely Manager';
        break;
      case numOfEmployees >= 4 && numOfEmployees <= 10:
        this.title = 'Mostly Manager';
        break;
      case numOfEmployees >= 11 && numOfEmployees <= 51:
        this.title = 'Manager';
        break;
      case numOfEmployees >= 51 && numOfEmployees <= 100:
        this.title = 'Manager Plus';
        break;
      case numOfEmployees >= 101:
        this.title = 'Bestest Manager';
        break;
    }
  }

  fire(index) {
    super.fire(index);
    this.bonus += 100;
  }
}

////////// PROBLEM 4 - Black Diamond //////////

/*
  Widget Co has a factory that makes widgets.
  Factories have Machines.

  Make a Machine class that takes in no parameters
  A Machine has the following properties:
    - widgets_made_count - default 0
    - wear_and_tear_count - default 0
    - needs_reboot - default false

  A Machine has the following methods:
    - makeWidgets
        - This function takes in a number and increases widgets_made_count by that amount
        - It also increases wear_and_tear_count by 1 for every 50
    - fixMachine
        - This function sets needs_reboot to true
    - reboot
        - This function returns a function that is called when the machine is done rebooting
        - It should set decrease wear_and_tear_count by 10, and set needs_reboot to false
*/

class Machine {
  constructor() {
    this.widgets_made_count = 0;
    this.wear_and_tear_count = 0;
    this.needs_reboot = false;
  }

  makeWidgets(num) {
    this.widgets_made_count += num;
    if (this.widgets_made_count % 50 === 0) {
      this.wear_and_tear_count = this.widgets_made_count / 50;
    }
  }

  fixMachine() {
    this.needs_reboot = true;
  }

  reboot() {
    this.wear_and_tear_count -= 10;
    this.needs_reboot = false;
    return () => {};
  }
}
