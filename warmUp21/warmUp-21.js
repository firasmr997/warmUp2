// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
// Input: text = "RebootKamp"
// Output: 0
 
// Constraints:
// 1 <= text.length <= 10^4
// text consists of lower case English letters only.
function str(string) {
    var arr=string.split("");
    var word="balloon";
    var result=0;
    for (var i=0; i < arr.length; i++) {
        if (word.search(arr[i])) {
            result = result + 1;
        }
    } 
    return result;
}
