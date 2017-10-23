'use strict';


//Question 1
var one = prompt('Given the option of mutant abilities, would I want to be able to fly?');
console.log('Question One Answer:', one);

one = one.toLowerCase();

if(one === 'yes' || one === 'y') {
  alert('Nah... I have a reasonable fear of heights that has preserved my health.');
} else if(one === 'no' || one === 'n'){
  alert('That\'s right! Flying is for squirrels and fish.');
};

//Question 2
var two = prompt('Am I tired often?');
console.log('Question Two Answer:', two);

two = two.toLowerCase();

if(two === 'yes' || two === 'y') {
  alert('Yes! Very often. I take a car/boat/bus-ride to class and back.');
} else if(two === 'no' || two === 'n'){
  alert('That\'s incorrect. I\'m so tired. I survive on 15 second micro naps.');
};

//Question 3
var three = prompt('Are lagers my favorite beers?');
console.log('Question Three Answer:', three);

three = three.toLowerCase();

if(three === 'yes' || three === 'y') {
  alert('Nope. IPAs are the right PAs.');
} else if(three === 'no' || three === 'n'){
  alert('That\'s right! IPAs are the right PAs.');
};

//Question 4
var four = prompt('Should they reboot the tv series Firefly?');
console.log('Question Four Answer:', four);

four = four.toLowerCase();

if(four === 'yes' || four === 'y') {
  alert('They absolutely should. Some of us wonder what\'s taking so long.');
} else if(four === 'no' || four === 'n'){
  alert('Honestly, the answer "No" shouldn\'t even be a choice.');
};

//Question 5
var five = prompt('Is money the root of my happiness?');
console.log('Question Five Answer:', five);

five = five.toLowerCase();

if(five === 'yes' || five === 'y') {
  alert('Oh, for sho.');
} else if(five === 'no' || five === 'n'){
  alert('Yea... I guess it isn\'t everything...');
};
//End of ASSIGNMENT TWO







if(answer === 'yes' || answer === 'y') {
  alert('Nah... I have a reasonable fear of heights that has preserved my health.');
} else if(answer === 'no' || answer === 'n'){
  alert('That\'s right! Flying is for squirrels and fish.');
};
//dda

var inquiry = [];

var flag = false;

function correct(checkAnswer) {
  if(checkAnswer === inquiry[i]) {
    flag = true;
    console.log(answer);
    alert('Good');
  } else if(checkAnswer === false){

  }
}


function checkArray(answer, arrayName) {
  for( var j = 0 ; j < arrayName.length ; j++) {
    if(arrayName[j] === answer) {
      flag1 = true;
    }
  }
}
