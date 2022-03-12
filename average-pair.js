"use strict";
// add whatever parameters you deem necessary & write docstring
/**  multiply the average by 2 then use multiple pointers to
 * find the sum equal to that value
 */
function averagePair(nums,target) {
    const doubleTarget = target * 2;

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        if (nums[left] + nums[right] === doubleTarget) {
            return true;
        }
        else if (nums[left] + nums[right] < doubleTarget) {
            left++;
        }
        else {
            right--;
        }
    }
    return false;
}
