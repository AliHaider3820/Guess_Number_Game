import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { log } from "console";
const sleep=()=>
{
    return new Promise((res)=>{
        setTimeout(res,2000);
    })
}

async function welcome()
{

let rainbow = chalkAnimation.rainbow("lets start the Game:"); // start
await sleep();
rainbow.stop();

}
let count=0;
async function game(){
    
let answers; 
    do
    { 
     answers= await inquirer
     .prompt([
         
     {
         name: "num",
         type: "number",
         message: "Computer have numbers from 0 to 100.\nEnter your number between them:" 
        }
    ])

    count++;
    if(answers.num==a)
    console.log(chalk.green("Excellent you guess the number in",count,"attempts."));
    else if(answers.num>a)
    console.log(chalk.yellow("Try again,your guess number is greater."));
    else if(answers.num<a)
    console.log(chalk.yellow("Try again,your guess number is lesser."));
}while(answers.num!=a);

    
}


const a = Math.floor(Math.random() * 100);
await welcome();
await game();
