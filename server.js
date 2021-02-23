const inquirer = require("inquirer");
const fs = require("fs");
const generateReadMe = require("./generateMyFile");

const { questions } = require("./questions");

getDataFromUser();

async function getDataFromUser() {
  const answers = await inquirer.prompt(questions);
  const dataToSave = generateReadMe(answers);
  fs.writeFile("readMe.md", dataToSave, (err) => {
    if (err) {
      throw err;
    }
  });
}
