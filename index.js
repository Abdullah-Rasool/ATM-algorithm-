#! /usr/bin/env node
import inquirer from "inquirer";
console.log("welcome to AR ATM");
const mypin = 2924;
let setbalance = 10000;
let inputpin = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin",
    },
]);
//for checking pin is valid or not
if (inputpin.pin === mypin) {
    console.log("The PIN you entered is correct");
    let perform = await inquirer.prompt([
        {
            name: "transactions",
            type: "list",
            message: "What transactions are you looking to perform at the ATM?",
            choices: ["withdraw cash", "fast cash", "check balance"],
        },
    ]);
    //if withdrawl option is selected
    if (perform.transactions === "withdraw cash") {
        let withdraw = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter your amount",
            },
        ]);
        //if the entered amount exceeds available balance
        if (withdraw.amount > setbalance) {
            console.log("Sorry, there is insufficient balance in your account to complete this transaction");
        }
        //for remaining balance
        else {
            setbalance -= withdraw.amount;
            console.log("your remaining balance is" + setbalance);
        }
    }
    //if fast cash option is selected
    else if (perform.transactions === "fast cash") {
        let fast = await inquirer.prompt([
            {
                name: "fastcash",
                type: "list",
                message: "Enter your amount",
                choices: [1000, 2000, 5000, 10000],
            },
        ]);
        //for withdrawl message & remaining balance
        setbalance -= fast.fastcash;
        console.log(`you have successfully withdrawl ${fast.fastcash} \n your remaining balance is ${setbalance}`);
    }
    //if check balance option is selected
    else if (perform.transactions === "check balance") {
        console.log(`your remaining balance is ${setbalance}`);
    }
}
else {
    console.log("The PIN you entered is invalid. Please enter the correct PIN");
}
