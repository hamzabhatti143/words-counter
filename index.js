#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        message: "Write the words which you want to count \n",
        type: "input"
    }
]);
const words = answers.Sentence.trim().split(" ");
console.log(words);
console.log(`Your total word count is: ${words.length}`);
