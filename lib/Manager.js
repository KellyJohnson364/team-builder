const Employee = require('./employee');
const inquirer = require('inquirer');

class Manager extends Employee {
  constructor(name, id, email, office, role) {
    super(name, id, email, role);
    this.office = office;  
    this.role = "Manager"
  }
  
  getOffice() {
     return this.office
  }

  getRole() {
  return this.role
  }


}
module.exports = Manager;



