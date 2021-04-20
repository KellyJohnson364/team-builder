// packages needed for this application
let inquirer = require('inquirer');
let fs = require('fs');
let Employee = require("./lib/Employee");
let Engineer = require("./lib/Engineer");
let Manager = require("./lib/Manager");
let Intern = require("./lib/Intern");
let html = require('./lib/generateHtml');

let humanResources=[]



let questions = [
    {
    type: 'input',
    name: 'name',
    message: 'What is the team member\'s name?',
    }, 
    {
      type: 'number',
      name: 'id',
      message: 'What is the team member\'s id?',
    },
    {
      type: 'input',
        name: 'email',
        message: 'What is the team member\'s email?',
    }, 
    {
      type: 'number',
      name: 'office',
      message: 'What is the team member\'s office number?',
    } 
  ]
  
let gitQ = 
  { 
    type: 'input',
    name: 'github',
     message: 'What is the team member\'s GitHub user name?',
  }


let schoolQ = 
  {
    type: 'input',
    name: 'school',
    message: 'What is the team member\'s school?',
  }
  
  let choices = () => {
   inquirer.prompt([
      { type: 'list',
      name: 'choice',
      message: 'What would you like to do next?',
      choices: ["Add an Engineer", "Add an Intern", "Finish entering team members"]
      }

    ])
    
    .then(data => {
      if (data.choice === "Add an Engineer") {
        questions.push(gitQ)
        inquirer.prompt(questions)

        .then((data) => {
          humanResources.push(new Engineer(data.name, data.id, data.email, data.github));

        }).catch((err) => console.log(err))
        .then((data) => {
          questions.pop()
          choices()
        }); 

      } else if (data.choice ==="Add an Intern") {
        questions.push(schoolQ)
        inquirer.prompt(questions)

        .then((data) => {
          humanResources.push(new Intern(data.name, data.id, data.email, data.school));

        }).catch((err) => console.log(err))

        .then((data) => {
          questions.pop()
          choices()
        }); 

      } else {
        renderIt()
      }
    })
  }
  
let begin = () => {
  inquirer.prompt(questions)
        .then((data) => {
        humanResources.push(new Manager(data.name, data.id, data.email, data.office));  

        }).catch((err) => console.log(err))

        .then((data) => {
          questions.pop()
          choices()
        });
}        


begin()


let renderIt = () => {
  for (let i=0; i < humanResources.length; i++) {
    console.log((humanResources[i].role))
  html +=`
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${humanResources[i].name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${humanResources[i].role}</h6>
      <a href="#" class="card-link">Email:${humanResources[i].email}</a>`
      if (humanResources[i].role === "Manager") {
        html+=`
        <p class="card-text">Office number: ${humanResources[i].office}.</p>
      </div>
    </div>`
      } else if (humanResources[i].role === "Engineer") {
        html +=` 
        <a href="#" class="card-link">${humanResources[i].github}</a>
      </div>
    </div>`
      } else {
        html += `
        <p class="card-text">School: ${humanResources[i].school}.</p>
      </div>
    </div>`
      }
    }   html += `
    </div>
    </div>
    </body>
    </html>` 
          fs.writeFile('./dist/index.html', html, (err) =>
          err ? console.log(err) : console.log('Successfully created HTML')
  );  
  }