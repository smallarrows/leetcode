/*
 * @lc app=leetcode.cn id=211 lang=javascript
 *
 * [211] 添加与搜索单词 - 数据结构设计
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
    this.data = {};
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    if(!this.data[word.length]){
        this.data[word.length] = [];
    }
    this.data[word.length].push(word);
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    let result = false;
    let isExist = false;
    const len = word.length;
    for (let i = 0; i < len; i++) {
        const char = word[i];
        if(char === '.'){
            isExist = true;
            break;
        }
    }
    const list = this.data[len] || [];
    for (let j = 0; j < list.length; j++) {
        const str = list[j];
        if(isExist){
            let f = true;
            for (let k = 0; k < str.length; k++) {
                if(word[k] !== '.' && str[k] !== word[k]){
                    f = false;
                    break;
                }
            }
            if(f){
                result = true;
                break;
            }
        }else{
            if(str === word){
                result = true;
                break;
            }
        }
    }
    return result;
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
// @lc code=end

