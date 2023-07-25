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





** program3: shuffle

 * @param {number[]} nums

 * @param {number} n

 * @return {number[]}

 */

var shuffle = function(nums, n) {

    

var ans=[];

for(var i=0;i<n;i++)

{

    ans.push(nums[i]);

    ans.push(nums[i+n]);

}

return ans ;

};

/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
   
 var value=0;
 for(var i=0;i<operations.length;i++)
 {
     if(operations[i]==="++X"|| operations[i]==="X++")
     {
         value++;
     }
     else if(operations[i]==="--X"|| operations[i]==="X--")
     {
         value--;
     }
 }
   
return value;
};






/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    var ans=[];
    var temp=[];
   maxValue= Math.max(...candies);
    for(var i=0;i<candies.length;i++)
    {
     temp[i]=candies[i]+extraCandies;
       console.log(temp[i]);
    }
 for(var j=0;j<temp.length;j++)
       {
       if(temp[j]>=maxValue)
       {
           ans.push(true)
       }
       else{
           ans.push(false)
       }
    }
   
      return ans;
};





/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
 var maxValue=0;

    for(var i=0;i<accounts.length;i++)
    {
         var temp=0;
        for(var j=0;j<accounts[i].length;j++)
        {
            temp+=accounts[i][j];
           
        }
        console.log(temp);
        maxValue=Math.max(maxValue,temp);
    }
    return maxValue;
};




/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    var count=0;
    for(var i=0;i<nums.length;i++)
    {
        for(var j=i+1;j<nums.length;j++)
        {
            if(nums[i]===nums[j])
            {
                count++
            }
        }
    }
    return count;
};


