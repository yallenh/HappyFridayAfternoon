/* https://leetcode.com/problems/mini-parser/ */

var deserialize = function(s) {
    var current;
    var integerStr = '';
    var queue = [];

    for (var i = 0; i < s.length; i++) {
        if (s[i] === '[') {
            if (current) {
                queue.push(current);
            }
            current = new NestedInteger();
            integerStr = '';
        } else if (s[i] === ']') {
            if (integerStr) {
                current.add(parseInt(integerStr));
            }
            integerStr = '';

            var parentNestedInteger = queue.pop();
            if (parentNestedInteger) {
                parentNestedInteger.add(current);
                current = parentNestedInteger;
            }
        } else if (s[i] === ',') {
            if (integerStr) {
                current.add(parseInt(integerStr));
            }
            integerStr = '';
        } else {
            integerStr += s[i];
        }
    }

    return current || parseInt(integerStr);
};

