var readlineSync = require("readline-sync");
const chalk = require("chalk");

var username=readlineSync.question("What is your name?");
console.log(chalk.cyan("welcome my friend "+username));

var score=0;

function play(question,answer){
  var useranswer=readlineSync.question(question);
  if(useranswer==answer){
    console.log(chalk.green("you are right!"));
    score++;
  }
  else{
    console.log(chalk.red("you are wrong:("));
  }
}

var questions=[{
  question:"what is my fav color?",
  answer:"pink"
},{
  question:"which is my fav food?",
  answer:"pizza"
}]

for(var i=0;i<questions.length;i++){
  var currentquestion=questions[i];
  
  play(currentquestion.question,currentquestion.answer);
}
console.log(score);