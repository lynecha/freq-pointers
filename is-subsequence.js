"use strict";

/** takes two strings checks if the first string is a subsequence of the second string and order matters
 *  sing sting
 *   i    l
 */
function isSubsequence(str1,str2) {
    let str1LeftPointer = 0;
    let str2LeftPointer = 0;
    let counter = 0;

    while (str1LeftPointer < str1.length && str2LeftPointer <str2.length) {
        if (str1[str1LeftPointer] === str2[str2LeftPointer]) {
            str1LeftPointer++;
            str2LeftPointer++;
            counter++;
        }
        else {
            str2LeftPointer++;
        }
    }
    return counter === str1.length;
}
