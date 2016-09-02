/* https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/ */

var twoSum = function(numbers, target) {
    var len = numbers.length;
    var index1 = numbers[0] - 1;
    var index2;

    for (var i = 0; i < len -1; i++) {
        if (numbers[i] !== index1) {
            index1 = numbers[i];
            index2 = index1 - 1;
            for (var j = i + 1; j < len; j++) {
                if (numbers[j] !== index2) {
                    index2 = numbers[j];
                    if (index1 + index2 === target) {
                        return [i + 1, j + 1];
                    }
                }
            }
        }
    }
};

console.log(twoSum([0, 0, 0, 2, 3, 9, 9, 9], 5));
