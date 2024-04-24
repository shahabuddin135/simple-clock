#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

const askTime = async () => {
  while (true) {
    let answer = await inquirer.prompt({
      message: chalk.greenBright("Tell me your time"),
      name: "time",
      type: "number",
    });

    if (answer.time >= 20 || answer.time <= 4) {
      console.log(chalk.redBright("Good night"));
    } else if (answer.time >= 5 && answer.time <= 12) {
      console.log(chalk.blueBright("Good morning"));
    } else if (answer.time >= 13 && answer.time <= 15) {
      console.log(chalk.yellowBright("Good afternoon"));
    } else if (answer.time >= 16 && answer.time <= 19) {
      console.log(chalk.magentaBright("Good Evening"));
    }

    let conformation = await inquirer.prompt({
      message: chalk.blackBright("Do you want to know another time?"),
      name: "confirm",
      type: "confirm",
      default: true,
    });

    if (conformation.confirm === false) {
      break;
    }
  }
};

askTime();
//13 = 1 pm
//14 = 2
//15 = 3
//16 = 4
//17 = 5
//18 = 6
//19 = 7
//20 = 8
//21 = 9
//22 = 10
//23 = 11
//24 = 12 pm

//1 am
//2
//3
//4
//5
//6
//7
//8
//9
//10
//11
//12 am
