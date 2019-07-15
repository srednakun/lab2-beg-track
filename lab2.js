'use strict';

/* ********************************************************
LAB 2: LOOPY SCI-FI

Welcome to Lab 2 =)

Be sure to read all the comments!

All of the instructions are inline with the assignment below.
Look for the word TODO in comments.  Each TODO will have a
description of what is required.

To run this file (in the terminal) use: node lab2.js */

//*********************************************************
// SETUP
//*********************************************************

// We're going to use this special assert method again to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log('assertion failure: ', failureMessage);
  }
}

//*********************************************************
// PROBLEM 1: The Blob. 20 points
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 Pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.

    for the...      | starting rate of | persons consumed |
                    |  consumption     |    that hour     |
--------------------|------------------|------------------|
    first hour      |    1/hour        |        1         |
    second hour     |    2/hour        |        2         |
    third hour      |    3/hour        |        3         |
    fourth hour     |    4/hour        |        4         |

 TODO: First, make a constructor function, called Blob, that makes blobs.

 TODO: Next, create an instance of Blob named blob.

 TODO: Then, use a loop to calculate how long it took the blob to finish
 with Dowington. */
function Blob() {}
var blob = new Blob();

var townPopulation = 1000;
var peopleConsumedPerHour = 1;

while (townPopulation > 0)
{
  var hoursSpentInDowington = peopleConsumedPerHour;
  townPopulation = townPopulation - peopleConsumedPerHour;
  peopleConsumedPerHour++;
}

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

Blob.prototype.hoursToOoze = function(population, peoplePerHour)
{
  this.population = population;
  this.peoplePerHour = peoplePerHour;
  var hours = 0;

  while (this.population > 0)
  {
    hours++;
    this.population = this.population - this.peoplePerHour;
    this.peoplePerHour++;
  }
  return hours;
};

assert(blob.hoursToOoze(0, 1) === 0, 'no people means no time needed.');
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  'hoursSpentInDowington should match hoursToOoze\'s result for 1000');

// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.
assert(blob.hoursToOoze(50, 2) === 9, '50pop starting at 2 did not work');
assert(blob.hoursToOoze(20, 5) === 4, '20pop starting at 5 did not work');
assert(blob.hoursToOoze(31, 3) === 6, '31pop starting at 3 did not work');

//*********************************************************
// PROBLEM 2: Universal Translator. 20 points
//*********************************************************

var hello = {
  klingon: 'nuqneH',  // home planet is Qo'noS
  romulan: 'Jolan\"tru', // home planet is Romulus
  federationStandard: 'hello' // home planet is Earth
};

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method (that you'll place on the prototype) called
// sayHello.

function SentientBeing(homePlanet, speech) {

  this.homePlanet = homePlanet;
  this.speech = speech;
}

SentientBeing.prototype.sayHello = function(SentientBeing) {

  if (SentientBeing.speech === 'klingon') {

    return hello.klingon;
  }

  else if (SentientBeing.speech === 'romulan') {

    return hello.romulan;
  }

  else if (SentientBeing.speech === 'federationStandard') {

    return hello.federationStandard;
  }
};

// TODO: create three SentientBeings, one for each language in the
// 'hello' object above.
var klingon = new SentientBeing('Qo\"nos', 'klingon'); // TODO: make a klingon
var romulan = new SentientBeing('Romulus', 'romulan'); // TODO: make a romulan
var human = new SentientBeing('Earth', 'federationStandard'); // TODO: make a human

assert(human.sayHello(klingon) === 'nuqneH', 'the klingon should hear nuqneH');

// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.
assert(human.sayHello(romulan) === 'Jolan\"tru', 'the romulan should hear Jolan\"tru');
assert(romulan.sayHello(human) === 'hello', 'the human should hear hello');
assert(romulan.sayHello(klingon) === 'nuqneH', 'the klingon should hear nuqneH');
assert(klingon.sayHello(romulan) === 'Jolan\"tru', 'the romulan should hear Jolan\"tru');
assert(klingon.sayHello(human) === 'hello', 'the human should hear hello');

//*********************************************************
// PROBLEM 3: Moar Loops. 20 points.
//
// Implement the following functions. Write at least 3
// assertions for each one
//*********************************************************
function max(array) {
  // TODO: return the largest number in the given array
  var maxNum = array[0];

  for (var i = 0; i < array.length; i++) {

    if (array[i] > maxNum) {

      maxNum = array[i];
    }
  }
  return maxNum;
}

// TODO: write three more assertions
assert(max([1, 3, 2]) === 3, '[1,3,2]');

assert(max([6, 1, 1, 7, 12, 16, 3, 7, 4, 37]) === 37, '[ 6, 1, 1, 7, 12, 16, 3, 7 , 4, 37 ]');
assert(max([9, 2, 0, 8]) === 9, '[ 9, 1, 2, 0, 8 ]');
assert(max([1, 2, 0, 9, 2, 0, -1, 10, 6, -6, 9]) === 10, '[ [ 1, 2, 0, 9, 2,0, -1, 10, 6, -6, 9]');
assert(max([-9, -0.2, -8, -2]) === -0.2, '[ -9, -0.2, -8, -2 ]');
assert(max([-100, -23, 0, -54, -12, -9, -7, -2000]) === 0, '[ -100, -23, 0, -54, -12, -9, -7, -2000, ]');

function variablify(string) {
  // TODO: you are given a string with several words in it
  // return a corresponding variable name that follows
  // javascript conventions
  // HINT:
  // you might want to use these string methods:
  //  split(), charAt(), toUpperCase()
  // and this array method: join()
  var splitString = string.split(' ');//'one' 'two' 'three'

  var currentWord = null;
  var oldLetter = null;
  var newLetter = null;
  var newString = [];

  for (var i = 0; i < splitString.length; i++) {

    if (i === 0) {

      currentWord = splitString[i];// 'one'
      newString.push(currentWord);
    }

    else {

      currentWord = splitString[i];//'two''three'
      oldLetter = currentWord.charAt(0);
      newLetter = oldLetter.toUpperCase();//'T'
      currentWord = currentWord.replace(oldLetter, newLetter);
      newString.push(currentWord);
    }
  }

  newString = newString.join('');
  return newString;
}

// TODO: write three more assertions
assert(variablify('one two three') === 'oneTwoThree',
  'variablify(\'one two three\')');

assert(variablify('max amount of rainfall per year') === 'maxAmountOfRainfallPerYear', 'variablify failed on max amount');
assert(variablify('total num watermelons') === 'totalNumWatermelons', 'variablify num watermelons failed');
assert(variablify('print out presidents last names') === 'printOutPresidentsLastNames', 'variablify failed on presidents');
//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
