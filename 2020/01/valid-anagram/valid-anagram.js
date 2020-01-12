// 我的解答 
// 通过34个测试用例，74ms

/**
* @param {string} s
* @param {string} t
* @return {boolean}
*/
var isAnagram = function(s, t) {
    if(s.length !== t.length) {
        return false;
    }
    let len = s.length;
    let map = {};
    for(let i = 0; i < len; i ++) {
        let schar = s[i];
        let tchar = t[i]
        if(map[schar] !== undefined) {
            map[schar] ++;
        } else {
            map[schar] = 1;
        }
        if(map[tchar] !== undefined) {
            map[tchar] --;
        } else {
            map[tchar] = -1;
        }
    }
    console.log(map)
    for(let key in map) {
        if(map[key] !== 0) {
            return false
        }
    }
    return true;
 };
 
 let s = 'anagram'//"中国";
 let t = 'nagaram'//"中样";
 console.log(isAnagram(s, t));
 
 // 简单优化
 /**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
     if(s.length !== t.length) {
         return false;
     }
     let len = s.length;
     let map = {};
     for(let i = 0; i < len; i ++) {
         let schar = s[i];
         let tchar = t[i]
         if(map[schar] === undefined) {
             map[schar] = 0;
         }
         if(map[tchar] === undefined) {
             map[tchar] = 0;
         }
         map[schar] ++;
         map[tchar] --;
     }
     console.log(map)
     for(let key in map) {
         if(map[key] !== 0) {
             return false
         }
     }
     return true;
  };
  
  let s = 'anagram'//"中国";
  let t = 'nagaram'//"中样";
  console.log(isAnagram(s, t));