// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of the project?",
    validate: (response) => {
      if (response) {
        return true;
      } else {
        console.log("You need to enter a title!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "How would you describe the project?",
    validate: (response) => {
      if (response) {
        return true;
      } else {
        console.log("You need to enter a description!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "How would someone install this project?",
    validate: (response) => {
      if (response) {
        return true;
      } else {
        console.log("You need to add installation instructions!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "How does someone use this project?",
    validate: (response) => {
      if (response) {
        return true;
      } else {
        console.log("You need to enter usage instuctions!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "contributors",
    message: "Who contributed to this project?",
    validate: (response) => {
      if (response) {
        return true;
      } else {
        console.log("You need to add contributors! (How about yourself)");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "test",
    message: "How do you test this project?",
    validate: (response) => {
      if (response) {
        return true;
      } else {
        console.log("You need to enter test instuctions!");
        return false;
      }
    },
  },
  {
    type: "confirm",
    name: "confirmLicense",
    message: "Are you using a license?",
    //default: false,
  },
  {
    type: "choices",
    name: "license",
    message: "What license are you using?",
    choices: [],
    when: ({ confirmLicense }) => confirmLicense,
  },
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?",
    validate: (response) => {
      if (response) {
        return true;
      } else {
        console.log("You need to enter a username!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
    validate: (response) => {
      if (response) {
        return true;
      } else {
        console.log("You need to enter an Email!");
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions);
}

// Function call to initialize app
init();
