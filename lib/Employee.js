
class Employee {
  constructor(name, id, email,role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role
   
  }
  //Method
  getName() {
    return this.name
  }
  
  // Method 
  getId() {
   return this.id
  }

  // Method 
  getEmail() {
    return this.email
  }

   //Method
  getRole() {
    return this.role
  }    
    
  
}


module.exports = Employee;