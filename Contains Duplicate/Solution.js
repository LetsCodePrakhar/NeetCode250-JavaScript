var containsDuplicate = function(nums) {
    // concise approach: create a Set from the array and compare sizes
    const seen = new Set(nums);
    // if sizes differ, there was at least one duplicate
    return seen.size !== nums.length;
};