// 我的解答
// 通过476个测试用例，72ms

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    let news = s.toLowerCase().replace(/[^a-z|0-9]/g, '');
    console.log(news);
    
    let len = news.length;
    for(let i = 0; i < Math.floor(len / 2); i ++ ) {
        let j = len - 1 - i;
        if(news[i] !== news[j]) {
            console.log(i, news[i], '-', j, news[j])
            return false
        }
    }
    return true;
};
        
let s = ''//"o00P"//"A man, a plan, a canal: Panama"//;
console.log(isPalindrome(s));


// 新思路：利用数组的reverse()方法
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let newS = s.replace(/[^a-z|A-Z|0-9]/g, '').toLowerCase();
    return newS === newS.split('').reverse().join('');
};
        
let s = ''//"o00P"//"A man, a plan, a canal: Panama"//;
console.log(isPalindrome(s));