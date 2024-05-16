#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  {
    message: "Enter your first number",
    type: "number",
    name: "firstnumber",
  },
  { message: "Enter your second number", type: "number", name: "secondnumber" },
  {
    message: "Select one of the operator",
    type: "list",
    name: "operators",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

//Conditional statements.
if (answer.operators === "Addition") {
  console.log(answer.firstnumber + answer.secondnumber);
} else if (answer.operators === "Subtraction") {
  console.log(answer.firstnumber - answer.secondnumber);
} else if (answer.operators === "Multiplication") {
  console.log(answer.firstnumber * answer.secondnumber);
} else if (answer.operators === "Division") {
  console.log(answer.firstnumber / answer.secondnumber);
} else {
  console.log("Kindly enter a valid operator.");
}