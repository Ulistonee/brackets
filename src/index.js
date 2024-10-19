module.exports = function check(str, bracketsConfig) {
    const stack = [];
    const bracketPairs = new Map(bracketsConfig);
    for (let char of str) {
        let isOpening = false;
        for (let [open, close] of bracketsConfig) {
            if (char === open && open === close) {
                if (stack.length > 0 && stack[stack.length - 1] === open) {
                    stack.pop();
                } else {
                    stack.push(open);
                }
                isOpening = true;
                break;
            } else if (char === open) {
                stack.push(open);
                isOpening = true;
                break;
            }
        }
        if (!isOpening) {
            if (stack.length === 0 || bracketPairs.get(stack.pop()) !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
