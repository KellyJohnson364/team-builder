const Intern = require("../lib/intern");


 
describe('Intern', () => {
  it('should return a new object of Intern', () => {
    
    const intern = new Intern("N. Tern", 444, "NTern@gmail.com", "CPU")
   
    expect(intern.getRole()).toBe("Intern")
    expect(intern.getSchool()).toBe("CPU")
})
});
