// Package imported
var readlineSync = require('readline-sync');
const chalk = require('chalk');

const log = console.log;

// Top Scorers: 
const topScores = [
  {name: "ed", score: 11},
  {name: "edd", score: 10},
  {name: "eddy", score: 8},
]

// print top Scorers name
function showTopScorers(topScores) {
  log(chalk.cyan("Leaderboard:"));

  for (let i=0; i<topScores.length;i++) {
    log(chalk.green(`${topScores[i].name} :${topScores[i].score} `));
  }
}

// Check if new record
function checkNewRecord(globalScore, topScores) {
  if (globalScore > topScores[0].score) {
    log(chalk.yellow("Awesome, you just broke the record! Share the screenshot to get listed in leaderboard."))
  }
};

// Wait for user's response.
const userName = readlineSync.question(log(chalk.yellow('Hey there, may I have your name? Enter name below: ')));
log(chalk.cyan(`Hello, ${userName}!`))
log(chalk.cyan("------------------------------------------------------"))

console.log('How Well Do You Know "The Big Bang Theory"?.')
console.log('');

const questionSet = [{
  question: "What is Sheldon's favorite number?", 
  options: ['12', '73', '41', '79'],
  answer: '73'
},
{
  question: 'What catchphrase does Sheldon often use when he is trying to fool around?',
   options: ['bazinga', 'gotcha', 'cool', 'told you so'],
  answer:'bazinga',
},
{
  question: "What is Sheldon's IQ?",
   options: ['112', '73', '187', '179'],
  answer:'187',
},
{
  question: "What was the name of Bernadette and Howard's baby girl?",
  options: ['pam', 'halley', 'monica', 'angela'],
  answer:'halley',
},
{
  question: "What is Leonard's IQ?",
  options: ['122', '173', '141', '179'],
  answer:'141',
},
{
  question: "What was Raj's sister's name?",
  options: ['Anjali', 'Megha', 'Priya', 'Anu'],
  answer:'Priya',
},
{
  question: "Which magazine did Raj get featured in?",
  options: ['Forbes', 'Indian Times', '30 Under 30', 'People Magazine'],
  answer:'People Magazine',
},
{
  question: "Who played the role of Leonard Hofstadter?",
  options: ['Tom Cruise', 'Johnny Galecki', 'Will Smith', 'Tom Hanks'],
  answer:'Johnny Galecki',
},
{
  question: "The show 'The Big Bang Theory' takes place in which city?",
  options: ['Pasadena', 'London', 'Florida', 'Norway'],
  answer:'Pasadena',
},
{
  question: "Who did Raj finally settle with?",
  options: ['Anjali', 'Monica', 'Anu', 'Beth'],
  answer:'Anu',
},
{
  question: "What was the number on Sheldon and Leonard's apartment?",
  options: ['2B', '9A', '6E', '4A'],
  answer:'4A',
},
{
  question: "Stuart runs a comic book store. What was the name of the store?",
  options: ['The New Comic Center', 'The Comic Center of LA', 'The Comic Center of Florida', 'The Comic Center of Pasadena'],
  answer:'The Comic Center of Pasadena',
},
]

let globalScore = 0;

function quizApp() {
  let currentQuestion;
  let currentAnswer;

  for (let i=0; i < questionSet.length; i++) {
    currentQuestion = questionSet[i].question;
    log(chalk.green(currentQuestion));
    

    let optionArr = questionSet[i].options;
    let currentAnswer = readlineSync.keyInSelect(optionArr, 'Select Option?',
  {cancel: false});

    console.log(optionArr[currentAnswer])
    // if (optionArr[currentAnswer] === 'CANCEL') {
    //   console.log('skipping question...');
    //   return;
    // } else 
    if (questionSet[i].answer.toLowerCase() === optionArr[currentAnswer].toLowerCase()) {  
      log(chalk.cyan("Correct Answer!"));
      globalScore++;
      log(chalk.yellow(`current score: ${globalScore}`))
      console.log("------------------------------------------------------")
    } else {
      log(chalk.red("Wrong Answer!!!"));
      log(chalk.yellow(`current score: ${globalScore}`))
      console.log("------------------------------------------------------")
      continue;

    }
  }

  log(chalk.yellow((`your final score : ${globalScore}/${questionSet.length}`)))

  console.log("------------------------------------------------------");
  checkNewRecord(globalScore, topScores);
  console.log("------------------------------------------------------");
  showTopScorers(topScores)
}



quizApp();