const Engineer = require("../lib/engineer");



describe('Engineer', () => {
  it('should return a new object of Engineer', () => {

    const engineer = new Engineer("N. G. Near", 1, "NNear@gmail.com", "neargituser")
    
    expect(engineer.getGithub()).toBe("neargituser")
    expect(engineer.getRole()).toBe("Engineer");
  });   
});