/*
 * This function takes two strings, s1 and s2 and return the longgest common subsequence of s1 and s2
 * @param {string} s1 - First string
 * @param {string} s2 - Second string
 * @returns {string}
*/

function subseq(s1, s2, start = 0) {
    if (start === s2.length - 1) {
        return '';
    }
    const startString = s1.length > s2.length ? s2 : s1;
    let secondString = s1.length > s2.length ? s1 : s2;
    let lastIndex = -1;
    let result = '';
    let results = [];
    [...startString].slice(start, startString.length).map((char) => {
        const allIndexes = [...secondString].map((sChar, i) => sChar == char ? i : -1).filter(i => i > -1 && i > lastIndex);
        if (allIndexes.length > 0) {
            lastIndex = allIndexes[0];
            result = result.concat(char);
        }
    });
    results = results.concat(result, subseq(s1, s2, start + 1));
    let maxStr = '';
    for (let i = 0; i < results.length; i++) {
        if (results[i].length > maxStr.length) {
            maxStr = results[i];
        }
    }
    return maxStr;
}

console.log(subseq('AGGTAB', 'GXTXAYB')); // prints "GTAB"