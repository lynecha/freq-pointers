// add whatever parameters you deem necessary & write doc comment

/** first input is the word and 2nd input are the letters
 *  create two frequency counters then compare
 */

"use strict";

function canConstructWord(word, letters) {
    if (letters === "") {
        return false;
    }
    let wordCounter = createFrequencyCounter(word);
    let letterCounter = createFrequencyCounter(letters);


    for (let key of wordCounter.keys()) {
        if (wordCounter.get(key) > letterCounter.get(key)) {
            return false;
        }
    }
    return true;
}

function createFrequencyCounter(word) {
    let frequencyCounter = new Map();
    for (char of word) {
        if (!frequencyCounter.has(char)) {
            frequencyCounter.set(char, 1);
        }
        else {
            frequencyCounter.set(char, frequencyCounter.get(char) + 1);
        }
    }
    return frequencyCounter;
}
