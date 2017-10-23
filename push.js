'use strict';

alert('So anyways ' + user + '. Soon it will be Halloween. I think it\'s a good idea to make a list of scary things to avoid this year. Thing\'s like Heights, Public Pooping, and Narcissists in Power.');

var list = ['Height\'s', ' Pooping in Public Places', ' Narcissists'];

for(var i = 0 ; i < list.length ; i++){
  var answer = prompt('What else should we add to the Scary List?');
  console.log('Each scary iteration:', answer);
  list.push(' ' + answer);
  if(i === 2) {
    break;
  }
}

alert('The Scary List is Complete!');
alert(list + '.');
