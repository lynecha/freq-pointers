// add whatever parameters you deem necessary & write docstring
/** iterate throught the keys add the key and val into the object if no value push in null
 * ans obj
 */
"use strict";

function twoArrayObject(keys,values) {
    let ansObj = {};
    for (let i = 0; i <keys.length; i++) {
        if (values[i] === undefined) {
            ansObj[keys[i]] = null;
        }
        ansObj[keys[i]] = values[i];
    }
    return ansObj;
}
