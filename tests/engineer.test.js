const Engineer = require("../lib/engineer");


it("Engineer",() => {
    const engineer = new Engineer("N. G. Near", 1, "NNear@gmail.com", "neargituser")
    expect(engineer.getGithub()).toBe("neargituser")
    expect(engineer.getRole()).toBe("Engineer");
   
})