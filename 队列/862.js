/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var shortestSubarray = function(nums, k) {
    let count = nums.length;
    let min = count + 1;
    for (let i = 0; i < count; i++) {
        if (nums[i] <= 0) {
            continue;
        }
        if (nums[i] >= k) {
            return 1;
        }
        let total = nums[i];
        for (let j = i + 1; j < count && (j - i + 1) < min; j++) {
            total += nums[j];
            if (total <= 0) {
                break;
            }
            if (total >= k) {
                if (j - i + 1 < min) {
                    min = j - i + 1;
                } 
            }
        }
    }
    if (min === count + 1) {
        return -1;
    }
    return min;
};

