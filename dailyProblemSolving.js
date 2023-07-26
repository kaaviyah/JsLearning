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






/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
 
    var rightArr=[];
     var rightArr1=[];
     var rightrev=[];
     var leftArr=[];
     var leftnew=0;
     var totalsum=[];
     var result=[];
    for(var i=0;i<nums.length;i++)
     {
       
        rightArr[i]=nums[i];
        rightArr.push(0);
       
    }
    //  console.log(rightArr);
     var rightnew=0;
     for(var i=rightArr.length-1;i>1;i--)
     {
        rightArr[i]=rightnew;
        rightnew=rightArr[i]+rightArr[i-1];
     
        // console.log(rightnew);
       
       rightArr1.push(rightnew);

      }
    //    console.log(rightArr1);
       for(var i=rightArr1.length-1;i>=0;i--)
       {
           rightrev.push(rightArr1[i]);
       }

   
     
     rightrev.push(0);
     console.log("rightsum :"+rightrev);
      nums.splice(0,0,0);
      //console.log(nums);
     for(var i=0;i<nums.length-2;i++)
     {
         nums[i]=leftnew;
         leftnew=nums[i]+nums[i+1];
         
          leftArr.push(leftnew)
     }
     
 
    leftArr.splice(0,0,0);
      console.log(leftArr);
      for(var i=0;i<leftArr.length;i++)
      {
    for(var j=i;j<rightrev.length;j++)
    {
        totalsum[i]=leftArr[i]-rightrev[j];
        break;
       
    }
   
result[i]=Math.abs(totalsum[i]);
 console.log(result[i]);
      }
      return result;
};
