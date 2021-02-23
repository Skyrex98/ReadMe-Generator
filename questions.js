const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please provide a breif description of your project.",
    name: "description",
  },
  {
    type: "input",
    message: "What are the instructions for installing your project?",
    name: "install",
  },
  {
    type: "input",
    message: "How is your project used?",
    name: "usage",
  },
  {
    type: "list",
    message: "Which license will you be using for the project?",
    choices: ["MIT", "GNU GPL v3", "IBM Public", "ISC"],
    name: "license",
  },
  {
    type: "input",
    message: "How can others contribute to your project?",
    name: "contribution",
  },
  {
    type: "input",
    message: "How should any tests be run for the project?",
    name: "tests",
  },

  {
    type: "input",
    message: "What is your Github username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address",
    name: "email",
  },
];
module.exports = { questions };
