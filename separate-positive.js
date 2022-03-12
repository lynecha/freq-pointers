// add whatever parameters you deem necessary & write docstring

/* left and right pointers
while left is smaller than right
left is negative? swap positions increment left
right is positive swap postions decrement right

*/
/** take in array of nums and sort negative numbers on right
 * array and positive on left of array */
function separatePositive(nums) {

  let left = 0;
  let right = nums.length - 1;

  while (left < right){
    if (nums[left] < 0){
      if(nums[right] > 0){
        let temp = nums[left];

        nums[left] = nums[right];
        nums[right] = temp;
        left++
        right--
      }else {
        right--
      }
    }else {
      left++
    }
  }
  return nums
}
