export default

function caesar(text, shift) {
    let result = "";
    for (let char of text) {
        if (char >= 'A' && char <= 'Z') {
            const code = char.charCodeAt(0) - 65;
            const shifted = (code + shift + 26) % 26;
            result += String.fromCharCode(shifted + 65);
        }
        else if (char >= 'a' && char <= 'z') {
            const code = char.charCodeAt(0) - 97;
            const shifted = (code + shift + 26) % 26;
            result += String.fromCharCode(shifted + 97);
        }
        else {
            result += char;
        }
    }
    return result;
}

export {caesar};