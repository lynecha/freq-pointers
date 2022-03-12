"use strict";

/**Convert numbers to strings and feed into frequency counter
 * Compare string lengths and frequences*/
function sameFrequency(num1, num2) {

  const numString1 = createFrequencyCounter(num1.toString());
  const numString2 = createFrequencyCounter(num2.toString());

  if (numString1.length !== numString2.length) {
    return false;
  }
  for (let key of numString1.keys()) {

    if (numString1.get(key) !== numString2.get(key)) {
      return false;
    }
  }
  return true;
}

/** Frequency counter to sort strings and arrays */
function createFrequencyCounter(word) {
  let frequencyCounter = new Map();

  for (let char of word) {
    if (!frequencyCounter.has(char)) {
      frequencyCounter.set(char, 1);
    }
    else {
      frequencyCounter.set(char, frequencyCounter.get(char) + 1);
    }
  }
  return frequencyCounter;
}