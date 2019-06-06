// Option 1: for loop
function reverseString1(string) {
    let reversed = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string[i]; 
    }
    return reversed;
}

let test1Result = reverseString1('hello');
console.log(test1Result);