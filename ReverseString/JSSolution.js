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

// Option 2: split(), reverse(), and join()
reverseString2 = string => {
    return string.split("").reverse().join("");
}

// Option 3: Spread Operator
reverseString3 = string => {
    return [...string].reverse().join("");
}

// Option 4: reduce()
reverseString4 = string => {
    return string.split("").reduce((rev, char)=> char + rev, ''); 
}

// Option 5: Recursion
reverseString5 = string => {
    if (string === "") {
        return string;
    } else {
        return reverseString5(string.substr(1)) + string[0];    
    }
}

// ****************
// Tests:
let test1aResult = reverseString1a('hello');
console.log('Option 1a:', test1aResult);

let test1bResult = reverseString1b('hello');
console.log('Option 1b:', test1bResult);

let test1cResult = reverseString1c('hello');
console.log('Option 1c:', test1cResult);

let test2Result = reverseString2('hello');
console.log('Option 2:', test2Result);

let test3Result = reverseString3('hello');
console.log('Option 3:', test3Result);

let test4Result = reverseString4('hello');
console.log('Option 4:', test4Result);

let test5Result = reverseString5('hello');
console.log('Option 5:', test5Result);