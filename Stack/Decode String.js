/**
 * @param {string} s
 * @return {string}
 */

// Time: O(n) | Space: O(n)
function decodeString(s) {
  let currNum = 0;
  let currStr = "";
  const strStack = [];
  const numStack = [];

  for (const c of s) {
    if (c >= "0" && c <= "9") {
      currNum = 10 * currNum + Number(c);
    } else if (c === "[") {
      strStack.push(currStr);
      numStack.push(currNum);
      currStr = "";
      currNum = 0;
    } else if (c === "]") {
      const repeatTime = numStack.pop();
      const prevStr = strStack.pop();
      currStr = prevStr + currStr.repeat(repeatTime);
    } else {
      currStr += c;
    }
  }

  return currStr;
}
