const Employee = require('./employee');
const inquirer = require('inquirer');

class Intern extends Employee {
  constructor(name, id, email, school, role) {
    super(name, id, email, role);
    this.school = school;
    this.role = "Intern" 
  }
  

  getSchool () {
    return this.school
  }

  getRole() {
  return this.role;
  }
}
  
  module.exports = Intern; 

