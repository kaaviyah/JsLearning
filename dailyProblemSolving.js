/** program 1:Array from Permutation

 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    var ans=[nums.length];
    for(var i=0;i<nums.length;i++)
    {
    
    ans[i]=[nums[nums[i]]];
  
    }
    return ans;
};

/**program 2:Concatenation of Array
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
   
   var arr=[nums.length*2];
   for(var i=0;i<nums.length;i++)
   {
       arr[i]=nums[i];
       arr[i+nums.length]=nums[i];
   }

  
   return arr;
};
