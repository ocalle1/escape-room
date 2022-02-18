const readline = require("readline-sync");
const name = readline.question("What is your name? ");

console.log(`Welcome, ${name}, to my Esape Room!`);

let isAlive = true;
let hasKey = false;
let pressStart = false;
let room = 1;
const start = readline.keyIn("Please press 1 to start!", {limit: '$<1>'});
//what is keyIn and limit???
if (start==1){
    console.log("you awake in a strange room. There is a small hole in the wall big enough for your arm. \nThe door appears to be locked. There is a desk in the room.\nWhat would you like to do?");
    pressStart = true;
}
//while loop for room #1
while (isAlive == true && pressStart == true && room == 1)
{
    const optionID = readline.keyIn("Press 1 to put your hand in the hole. \nPress 2 to search the desk. \nPress 3 to open the door. ", {limit: '$<1-3>'} );
    if (optionID == 1)
    {
        console.log("SOMERTHING GRABS YOUR ARM AND CUTS IT OFF! YOU DIE!");
        isAlive = false;
    }

    else if (optionID == 2)
    {
        if (hasKey == true)
        {
        console.log("THERE IS NOTHING ELSE IN THE DESK. QUIT WASTING TIME!");
        }
    else if (hasKey == false)
    {
        console.log("YOU FOUND A KEY IN THE DESK!")
        hasKey = true;
    }
}
    else if (optionID == 3)
        {
            if (hasKey == false)
        {
            console.log("YOU SHOULD TRY TO FIND THE KEY FIRST!");
        }
        else if (hasKey == true)
        {
            console.log("You have escaped!");
            break;
        }
    }
}
        