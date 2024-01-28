import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";

console.log("\t \n Class 1\n")
console.log("\t \n Task 1\n")
console.log("\t \n Calculater\n")

function welcomeMessage(){
    let animation = chalkAnimation.karaoke(`
       
    "Hey! Get ready for some math Magic with our calulator. XD
     _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|
   
            ┓     ┓┏           ┓  ┏┓┓       ┓
            ┣┓┓┏  ┣┫┏┓┏┳┓┏┳┓┏┓┏┫  ┣┫┣┓┏┳┓┏┓┏┫
            ┗┛┗┫  ┛┗┗┻┛┗┗┛┗┗┗┻┗┻  ┛┗┛┗┛┗┗┗ ┗┻
               ┛                             

`)
setTimeout(()=>{
animation.stop();
} ,3700); 

}
function addition(num1:number,num2:number):void{
    console.log(chalk.bgGreen(`----> ${num1} + ${num2} = 
    ${num1+num2}`));
}
function subtraction(num1:number,num2:number):void{
    console.log(chalk.bgGreen(`----> ${num1} - ${num2} = 
    ${num1 - num2}`));
}
function multiplication(num1:number,num2:number):void{
    console.log(chalk.bgGreen(`----> ${num1} x ${num2} = 
    ${num1 * num2}`));
}
function division(num1:number,num2:number):void{
    console.log(chalk.bgGreen(`----> ${num1} / ${num2} = 
    ${num1 / num2}`));
}
function power(num1:number,num2:number):void{
    console.log(chalk.bgGreen(`----> ${num1} ^ 
    ${num2} = ${num1 ** num2}`));
}
async function askQuestion(){
    const choices :string []=["+ Addition","- Subtraction","* Multiplication","/ Division","^ Power","<> Ëxit"]
 while (true){
    const operator = await inquirer.prompt([
        {
            name :"selectedOperator",
            type: "list",
            message:"Which operator you want to perform?:",
            choices:choices
    	}   
    ])
    if (operator.selectedOperator === choices[5])
    {
        let endingAnimation= chalkAnimation.neon(
            `Thank you for using our Calculator!`
            );
        setTimeout(() =>{
            endingAnimation.stop()
        },3000)
        break;
    }
    else{
        const input= await inquirer.prompt([
            {
                type:"number",
                massage:chalk.hex("#e0b609")(`Enter the value for number:`),
                name:"number1",
                                
            },
            {
                type:"number",
                massage:chalk.hex("#e0b609")(`Enter the value for number:`),
                name:"number2",
                
            },
        ])
        if (!isNaN(input.number1) && !isNaN (input.number2))
            { 
                switch(operator.selectedOperator)
                    {
                        case"+ Addition":
                            addition(input.number1,input.number2)
                            break;
                        case"- Subtraction":
                            subtraction(input.number1,input.number2)
                            break;
                        case"* Multiplication":
                            multiplication(input.number1,input.number2)
                            break;
                        case"/ Division":
                            division(input.number1,input.number2)
                            break;
                        case"^ Power":
                            power(input.number1,input.number2)
                            break;
                        default:
                            break;
                                
                    }
            }   
            else{console.log(chalk.bgRed("Please! enter a valid number")) } 
            
        } 
    }       

}
 
welcomeMessage()
askQuestion()

