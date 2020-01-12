// 我的解答
// 通过104个测试用例，120ms
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = {};
    for(let i = 0; i < s.length; i ++) {
        let char = s[i];
        if(map[char] === undefined) {
            map[char] = [];
        } 
        map[char].push(i);
    }
    for(let key in map) {
        if(map[key].length === 1) {
            return map[key][0];
        }
    }
    return -1;
};

let x = 'leetcode'//‘’//'loveleetcode';
console.log(firstUniqChar(x));


// 简单优化
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = {};
    for(let i = 0; i < s.length; i ++) {
        let char = s[i];
        if(map[char] === undefined) {
            map[char] = 1;
        } 
        else {
            map[char] ++;
        }
    }
    console.log(map)
    for(let i = 0; i < s.length; i ++) {
        if(map[s[i]] === 1) {
            return i;
        }
    }
    return -1;
};

let x = 'leetcode'//""//'loveleetcode';
console.log(firstUniqChar(x));


// 换一个思路，利用indexOf 和lastIndexOf
// 通过104个测试用例，114ms
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    for(let i = 0; i < s.length; i ++) {
        if(s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            return i;
        }
    }
    return -1;
};

let x = 'leetcode'//‘’//'loveleetcode';
console.log(firstUniqChar(x));