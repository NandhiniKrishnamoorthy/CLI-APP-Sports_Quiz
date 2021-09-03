//******creating Quiz********

var chalk = require('chalk');
var readLineSync = require('readline-sync');
var score = 0;

var highScores = [
    {
        name: "Nandhini",
        score: 10,
    },
    {
        name: "Prasath",
        score: 9,
    }
]


//Welcoming User
function welcome() {
    var userName = readLineSync.question("May I know your Name! ");
    console.log(chalk.bgYellow.bold("\nWelcome " + userName + " to Sportz quiz"));
    console.log(chalk.bgRed("\n\nInstructions") + " \n\n * The quiz consits of 2 levels, Level1 & Level2 has 4 & 6 questions respectively.\n * To answer any question, just type the option number (1,2,3,4) and without pressing enter. \n * For every right answer, you will be awarded +1 point and 0.5 point will be deducted for every wrong answer. \n * To reach Level 2, you must score atleast 2 points in Level 1.");
    if (readLineSync.keyInYN("\nAre you ready for the quiz? ")) {
        console.log(chalk.magenta("\n***** LEVEL 1 *****"));
        quiz();
        scores();
    }
    else {
        console.log("Thanks, Try next time");
    }
}

//Diplay questions and options
function game(question, options, answer) {
    //var userAnswer = readLineSync.keyInSelect(options, question);
    console.log(chalk.blue(question));
    for (i = 0; i < options.length; i++) {
        console.log("[" + (i + 1) + "] " + options[i]);
    }
    var userAnswer = readLineSync.keyIn("\nChoose your answer: ", { limit: '$<1-4>' });
    //console.log(answer, userAnswer, options[userAnswer-1])
    if (answer === options[userAnswer - 1]) {
        console.log(chalk.bold.green("Correct! "));
        score = score + 1;
    } else {
        console.log(chalk.red.bold("Wrong"));
        score = score - 0.5;
    }
    //console.log("Your current score is: " + score);
    //console.log("----------------------------------");
}


function quiz() {
    //questionList for level1
    quizLevel1Question = [
        {
            question: "\n Q1. what is the highest sports award in India?\n",
            options: ["Arjuna Award", "Dronacharya Award", "Rajiv Gandhi Khel Ratna Award", "Maulana Abul Kalam Azad Trophy"],
            answer: "Rajiv Gandhi Khel Ratna Award",
        },
        {
            question: "\n Q2. Where will the 2024 olympic Games be held?\n",
            options: ["Paris", "London", "China", "Brazil"],
            answer: "Paris",
        },
        {
            question: "\n Q3. Who has the most worldcup wins in football?\n",
            options: ["Paris", "London", "China", "Brazil"],
            answer: "Brazil",
        },
        {
            question: "\n Q4. Which chess piece can only move diagonally?\n",
            options: ["The Rook", "The King", "The Queen", "The Bishop"],
            answer: "The Bishop",
        },
    ]

    //questionlist for level2
    quizLevel2Question = [
        {
            question: "\nQ1. What is the only sport to be played on the moon?\n",
            options: ["Table Tennis", "Golf", "wrestling", "weightlifting"],
            answer: "Golf",
        },
        {
            question: "\nQ2. What colour belt are martial arts experts entitled to wear?\n",
            options: ["White", "Yellow", "Black", "Red"],
            answer: "Black",
        },
        {
            question: "\nQ3. How many gold medals has Usain Bolt won?\n",
            options: ["9", "7", "8", "10"],
            answer: "8",
        },
        {
            question: "\nQ4. Which country won the first ever football world cup?\n",
            options: ["Argentina", "Brazil", "German", "Uruguay"],
            answer: "Uruguay",
        },
        {
            question: "\nQ5. Diego Maradona, who is one of the best ever football players, played for which country?\n",
            options: ["Argentina", "Brazil", "German", "Uruguay"],
            answer: "Argentina",
        },
        {
            question: "\nQ6. How long is one half of a professional football game?\n",
            options: ["40 minutes", "45 minutes", "50 minutes", "55 minutes"],
            answer: "45 minutes",
        },
    ]

    play(quizLevel1Question);

    if (score >= 2) {
        console.log(chalk.magenta("\n\n****YAY! Level1 Done!****"));
        console.log(chalk.magenta("****Let's play Level2****"));
        play(quizLevel2Question);
    }

    function play(questionList) {
        for (j = 0; j < questionList.length; j++) {
            game(questionList[j].question, questionList[j].options, questionList[j].answer);

            /*var exit = readLineSync.keyIn("\nPress any other key to continue or Press e to exit the quiz \n", { limit: '$<a-z>' })
      
            if (exit === "e") {
              break;
            } else {
              continue;
            }*/
        }
    }
}

//Display Highscores
function scores() {
    console.log(chalk.bold.bgMagenta("\nCONGRATULATIONS! You Scored " + score));
    console.log("\nCheck out the highscores, Ping me if you reached that, I'll update your score");

    for (k = 0; k < highScores.length; k++) {
        console.log(highScores[k].name + " : " + highScores[k].score);
    }

}

welcome();
