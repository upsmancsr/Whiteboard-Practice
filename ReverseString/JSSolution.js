// Option 1a: for loop
reverseString1a = string => {
    let reversed = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string[i]; 
    }
    return reversed;
}

// Option 1b:
reverseString1b = string => {
    let reversed = "";
    for (let i = 0; i < string.length; i++) {
        reversed = string[i] + reversed; 
    }
    return reversed;
}

// Option 1c:
reverseString1c = string => {
    let reversed = "";
    for (let char of string) {
        reversed = char + reversed; 
    }
    return reversed;
}

// Option 2:

// Tests:
let test1aResult = reverseString1a('hello');
console.log('Option 1a:', test1aResult);

let test1bResult = reverseString1b('hello');
console.log('Option 1b:', test1bResult);

let test1cResult = reverseString1c('hello');
console.log('Option 1c:', test1cResult);