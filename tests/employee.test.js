const Employee = require("../lib/employee");


 
describe('Employee', () => {
  it('should return a new object of Employee', () => {
    
    const employee = new Employee("M. Ploy", 1111, "MPloy@gmail.com")
    
    expect(employee.getName()).toBe("M. Ploy")
    expect(employee.getId()).toBe(1111)
    expect(employee.getEmail()).toBe("MPloy@gmail.com")
    
})
});
