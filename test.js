'use strict';

var inquiry = [];




function questions(textofquestion) {
  var answer = prompt(textofquestion);
  console.log('answer', answer);
  return answer;
}


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
