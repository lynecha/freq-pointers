"use strict";
/** iterate throught the keys add the key and val into the object
 * if no value push in null
 * ans obj */
function twoArrayObject(keys, values) {
    let ansObj = {};
    for (let i = 0; i < keys.length; i++) {

        if (values[i] === undefined) {
            ansObj[keys[i]] = null;
        }else{
            ansObj[keys[i]] = values[i];
        }
    }
    return ansObj;
}
