var maxProduct = function(words) {
    var wordsLength = words.length;
    var wordsArray = [];
    for (var w = 0; w < wordsLength; w++) {
        var word = words[w];
        var wordLength = word.length;
        var wordArray = new Array(26); // [a - z]
        for (var c = 0; c < wordLength; c++) {
            wordArray[word[c].charCodeAt() - 97] = 1; // ascii of 'a'
        }
        wordsArray.push(wordArray);
    }

    function shareCommonLetters(a, b) {
        for (var i = 0; i < 26; i++) {
            if (a[i] & b[i]) {
                return true;
            }
        }
        return false;
    }

    var max = 0;
    for (var i = 0; i < wordsLength - 1; i++) {
        var word1 = wordsArray[i];
        var word1Length = words[i].length;
        for (j = i; j < wordsLength; j++) {
            var word2 = wordsArray[j];
            var word2Length = words[j].length;
            if (!shareCommonLetters(word1, word2)) {
                var product = word1Length * word2Length;
                if (product > max) {
                    max = product;
                }
            }
        }
    }
    return max;
};

console.log(maxProduct(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]));
