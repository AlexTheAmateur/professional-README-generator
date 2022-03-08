// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    question: "What is the title of the project?",
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
    question: "How would you describe the project?",
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
    question: "How would someone install this project?",
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
    question: "How does someone use this project?",
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
    question: "Who contributed to this project?",
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
    question: "How do you test this project?",
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
    question: "Are you using a license?",
    default: false,
  },
  {
    type: "choices",
    name: "license",
    question: "What license are you using?",
    choices: [],
  },
  {
    type: "input",
    name: "username",
    question: "What is your GitHub username?",
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
    question: "What is your email?",
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
function init() {}

// Function call to initialize app
init();
