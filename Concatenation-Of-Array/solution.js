var getConcatenation = function(nums) {
        const nums2 = []; // Created an empty array 
        for(let i = 0; i < nums.length; i++){
            nums2.push(nums[i]) // pushed nums array element in new array 
        }
        const ans = nums.concat(nums2) // merged both array in ans array
        return ans;
};