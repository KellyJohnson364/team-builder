const Manager = require("../lib/manager");


 
describe('Manager', () => {
  it('should return a new object of Manager', () => {
    
    const manager = new Manager("Manny Jehr", 333, "MJehr@gmail.com", 123)
    
    expect(manager.getRole()).toBe("Manager")
    expect(manager.getOffice()).toBe(123)
})
});
