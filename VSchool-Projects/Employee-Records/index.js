// Employee Records Exercise for Constructor and Mutability //

const employees = [];

// Constructor function for employees
function Employee (firstName, lastName, jobTitle, salary, status ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
}

// Employees
var emp1 = new Employee("Johnny", "Hero", "Capt", 80000, "Full-time");
var emp2 = new Employee("Jason", "Saver", "EMT", 60000, "Full-Time");
var emp3 = new Employee("Jack", "Axe", "Firefighter", 55000, "Full-Time");
var emp4 = new Employee("Jill", "Pretty", "Nurse", 45000, "Part-Time");

// Pushes employee constructor information into empty company employees array
employees.push(emp1, emp2, emp3, emp4);
console.log(employees);

// Change Job Status
Employee.prototype.status = "Contract";
console.log (emp4);