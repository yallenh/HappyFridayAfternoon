var groupAnagrams = function(strs) {
    var rtnMap = {};
    strs.forEach(function encode(str) {
        var asciiArr = [];
        for (var i = 0; i < str.length; i++) {
            asciiArr.push(str[i].charCodeAt());
        }
        var key = asciiArr.sort(function(a,b) { return a < b; }).join(',');
        if (!rtnMap[key]) {
            rtnMap[key] = [];
        }
        rtnMap[key].push(str);
    });
    return Object.keys(rtnMap).map(function(key) {
        return rtnMap[key];
    });
};

// test
var answer = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
console.log(answer);
