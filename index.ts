#!/usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {message: "Enter first number", type: "number", name: "firstNumbr"},
{message: "Enter second number", type: "number", name: "secondNumber"},

{message: "select one of the operaters to perform action", 
type: "list", 
name: "operator",
 choices: ["+", "-", "*", "/"]
},

]);


// console.log(answer);


// conditional statments

if (answer.operator === "+") {
    console.log(`${answer.firstNumbr} ${answer.operator} ${answer.secondNumber} = ${answer.firstNumbr+answer.secondNumber}`);
}

else if (answer.operator === "-") {
    console.log(`${answer.firstNumbr} ${answer.operator} ${answer.secondNumber} = ${answer.firstNumbr+answer.secondNumber}`);
}

else if (answer.operator === "-")
{
    console.log(`${answer.firstNumbr} ${answer.operator} ${answer.secondNumber} = ${answer.firstNumbr*answer.secondNumber}`);
}
else if (answer.operator === "/") {
    console.log(`${answer.firstNumbr} ${answer.operator} ${answer.secondNumber} = ${answer.firstNumbr/answer.secondNumber}`)
}
else {
    console.log("pleas select a valied operator");
}
