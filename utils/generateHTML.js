


let badge;
let licenseSection;
let testSection;
let one;
let two;
let three;
let covenant;
let vidLink;
let screenLink;
let invite;

// Function to create badge depending of license chosen
function renderLicenseBadge(data) {
   if (data.license == 'Apache 2.0') {
      badge = `[![Apache 2.0](https://img.shields.io/badge/License-APACHE-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)`  
   } else if (data.license == 'Mozilla Public License Version 2.0') {
      badge =  `[![Mozilla Public License Version 2.0](https://img.shields.io/badge/License-MOZILLA-yellow.svg)](https://www.mozilla.org/en-US/MPL/2.0/)`
   } else if (data.license == 'GNU General Public License v3.0') {
      badge = `[![GNU General Public License v3.0](https://img.shields.io/badge/License-GNU-yellow.svg)](https://www.gnu.org/licenses/gpl-3.0.en.html)`
   } else if (data.license == 'The Unlicense') {
      badge = `[![The Unlicense](https://img.shields.io/badge/License-Unlicense-blue.svg)](https://unlicense.org/)`
   } else if (data.license == 'MIT License') {
      badge = `[![MIT license](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)`     
   } else {
      return ""
   } 
}

//function that returns the license section of README

function renderLicenseSection(data) {
   if (data.license) {
   let licenseFile = `${data.license.toLowerCase().split(' ').join('')}` 
   let licenseText = `[${data.license}](./assets/licenses/${licenseFile}.md)`
      licenseSection = `## License
This project is licensed under ${data.license}.
For more info click ${licenseText}.` 
   } else {
      return ""
   }
}
// Function to render sections depending on user answers

function renderSections(data) {
   if (data.test) {
      testSection = `## Tests
      ${data.testing}`
   } else {
      testSection= ""
   }
   if (data.githubOne!== undefined) {
      one = ` * ${data.githubOne}: [https://github.com/${data.githubOne}](https://github.com/${data.githubOne})`
   } else {
      one= ""
   }
   if (data.githubTwo!== undefined) {
      two = ` * ${data.githubTwo}: [https://github.com/${data.githubTwo}](https://github.com/${data.githubTwo})`
   } else {
      two= ""
   }  
   if (data.githubThree!== undefined) {
      three = ` * ${data.githubThree}: [https://github.com/${data.githubThree}](https://github.com/${data.githubThree})`  
   } else {
      three= ""
   }
   if (data.videoname!== undefined) {
      vidLink = `View this [video](${data.videoname}) as an example. `
   } else {
      vidLink= ""
   }
   if (data.contribution) {
      invite = `${data.invite}`
   } else {
      invite =""
   }
   if (data.covenant) {
      covenant = `Please adhere to the [Contributor Covenant Code of Conduct](./assets/licenses/contributor-covenant.md)`
   } else {
      covenant =""
   }
   if (data.screenshot) {
      screenLink = `![Screenshot 1 of site](./assets/images/${data.filename})`
   } else {
      screenLink =""
   }
}

// function to generate markdown for README
function generateMarkdown(data) {
   renderLicenseSection(data)
   renderLicenseBadge(data)
   renderSections(data)
  

  return `# ${data.title} 
   ${badge}
  ===========================================
    
  ## Description 
      ${data.description}  
  ## Table of Contents 
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)
  ## Installation 
      ${data.installation}
  ## Usage 
      ${data.usage}


${screenLink}


${vidLink}


  ## Contributions 
      This was created by:
* ${data.github}: [https://github.com/${data.github}](https://github.com/${data.github})
            ${one}
            ${two}
            ${three}
         ${invite}
         ${covenant}  

  ${testSection} 

  ## Questions 
If you have questions or feedback, please contact ${data.github} at [https://github.com/${data.github}](https://github.com/${data.github}) or via email at ${data.email}.

${licenseSection}`

}

module.exports = generateMarkdown;
