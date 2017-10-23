'use strict';
//Beginning of ASSIGNMENT TWO

//Introduction and Rules to my Guessing Game
alert('Welcome to my About Me page.');
alert('I want to play a game. \n\nI\'m calling it: "How well do you know Richard?');
alert('You will be given 5 questions about me.\n\n Answer with a "yes" or "y" or with a "no" or "n"');

//User enters their name
var user = prompt('Let\'s start by getting your name:');
console.log('User\'s name:', user);

alert('Thank you ' + user + '. Let\'s play!');

//My 5 questions
function question(textofquestion) {
  var answer = prompt(textofquestion);
  console.log('answer', answer);
  return answer;
}

function yesOrNo() {
  if(answer === 'yes' || answer === 'y') {
    alert('Nope.');
  } else if(answer === 'no' || answer === 'n'){
    alert('Correct!');
  };
}

function lowerCase() {
  answer = answer.toLowerCase();
}

var answer = question('Would I want to fly?');
lowerCase();
yesOrNo();

var answer = question('Do I enjoy porter beers?');
lowerCase();
yesOrNo();

var answer = question('Does anchovies belong on pizza?');
lowerCase();
yesOrNo();

var answer = question('Am I in a secret society?');
lowerCase();
yesOrNo();

var answer = question('Have I ever eaten a crayon');
lowerCase();
yesOrNo();


//Beginning of ASSIGNMENT THREE
//Question 6
var number;
var counter = 1;

while(counter < 5){
  number = prompt('About how many IPAs do you think until my body starts to work in reverse?');
  console.log('User Guessed:', number);
  if(isNaN(number) || number === null) {
    alert('Please enter a number.');
  } else if(number < 15) {
    alert(number + '? I can do better than that.');
    counter++;
  } else if(number > 24) {
    alert(number + ' IPAs is how I\'d die. You should guess a smaller number like, 15.');
    counter++;
  } else if(number > 15) {
    alert('I\'m probably getting closer to shitting myself at ' + number + ' IPAs.');
    counter++;
  } else if(Number(number) === 15) {
    alert('Nice!');
    break;
  }
}

//Question 7
function questions(textofquestion) {
  var answer = prompt(textofquestion);
  console.log('answer', answer);
  return answer;
}

var flag;
var correct = 0;
var guesses = 0;
var food = ['beer', 'pizza', 'sandwiches', 'mocha', 'cake', 'steak'];

while(guesses < 6) {
  var answer = questions('What is my favorite food?');
  answer = answer.toLowerCase();
  guesses++;
  console.log('Number of guesses:', guesses);
  //console.log('Guessed: ', answer);
  flag = false;
  for (var i = 0 ; i < food.length ; i++) {
    if (answer === food[i]) {
      alert('Nice Guess! High-Five!');
      correct++;
      flag = true;
    }
  }
  if(flag === false) {
    alert('Nope.');
  }
}
alert('Nice guesses. You got ' + correct + ' correct out of 6');

//THIS was an exercise in not reading the assignment thoroughly and doing it incorrectly. We'll call it a bonus game.
alert('So... ' + user + ' I read an assignment incorrectly one day and produced this app that pushes your answers to a list. Indulge me for the next few prompts.');
alert('Soon it will be Halloween. I think it\'s a good idea to make a list of scary things to avoid this year. Thing\'s like Heights, Public Pooping, and Narcissists in Power.');

var list = ['Height\'s', ' Pooping in Public Places', ' Narcissists'];

for(var j = 0 ; j < list.length ; j++){
  var answerNew = prompt('What else should we add to the Scary List?');
  console.log('Each scary iteration:', answerNew);
  list.push(' ' + answerNew);
  if(j === 2) {
    break;
  }
}

alert('The Scary List is Complete!');
alert(list + '.');
