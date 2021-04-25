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
        <div class="card m-4 text-center border" style="width: 18rem;">
          <div class="card-body">
            <div class="card-header  mb-4">
              <h4 class="card-subtitle text-muted">${humanResources[i].role}</h4>
            </div>
            <div>
              <h4 class="card-title">${humanResources[i].name}</h4>
              <p class="card-text">Employee ID: ${humanResources[i].id}.</p>`
       
      if (humanResources[i].role === "Manager") {
        html+=`
              <p class="card-text">Office number: ${humanResources[i].office}.</p>`
      } else if (humanResources[i].role === "Engineer") {
        html +=` 
              <span class="card-text">GitHub Profile:</span> <a target="_blank" href= "https://github.com/${humanResources[i].github}">${humanResources[i].github}</a> <br>`
      } else {
        html += `
              <p class="card-text">School: ${humanResources[i].school}.</p>`
      }
        html += `
            </div>
            <div class="card-footer tm-4">
              <span class="card-text tm-4">Email:</span><a target="_blank" href= "mailto:${humanResources[i].email}">${humanResources[i].email}</a>
            </div> 
          </div>
        </div>` 
    }
      html +=`
        </div>
      </div>
    </body>
  </html>` 
          fs.writeFile('./dist/index.html', html, (err) =>
          err ? console.log(err) : console.log('Successfully created HTML')
  );  
  }

  
  