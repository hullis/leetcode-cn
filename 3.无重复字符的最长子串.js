/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var cachedLetter = {};
    var length = s.length;
    var currentIndex = 0;
    var currentLength = 0;
    var maxStartIndex = 0;
    var maxLength = 0;

    while (currentIndex < length) {
        var currentChar = s[currentIndex];

        var lastAppearance = cachedLetter[currentChar];
        if (typeof lastAppearance !== 'undefined' && lastAppearance >= maxStartIndex) {
            maxStartIndex = lastAppearance + 1;
            currentLength = currentIndex - maxStartIndex + 1;
        } else {
            currentLength += 1;
            if (currentLength > maxLength) {
                maxLength = currentLength;
            }
        }

        cachedLetter[currentChar] = currentIndex;
        currentIndex += 1;
    }

    return maxLength;
};
// @lc code=end

/**
 * 设置头尾指针便利字符串
 * 
 * 右指针步进，对当前字符，判断是否在已经找到的 cache 中
 * * 如果有，查找其最后一次出现的位置，移动左指针到该位置的下一个
 * * 存储其出现的位置
 * 直到右指针遍历完整个字符串
 */