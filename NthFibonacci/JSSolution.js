// Non-recursive solution:
    // O(n) linear run-time

// function fib(n) {
//     let fibSeries = [0, 1];
//     for (let i = 2; i <= n; i++) {
//         fibSeries[i] = fibSeries[i - 2] + fibSeries[i - 1];
//     }
//     return fibSeries[n];
// } 


// Naive recursive solution:
    // O(n^2) exponential run-time

// function fib(n) {
//     if (n === 0 || n === 1) {
//       return n;
//     }
//     return fib(n-1) + fib(n-2);
// }

// Solution using recursion and memoization:

// function fib(n) {
//     let cache = {};

//     function f(n) {
//         let value = null;

//         if (n in cache) {
//             value = cache[n];
//         } else {    
//             if (n < 2) {
//                 value = n;
//             } else {
//                 value = f(n-2) + f(n-1);  // triggers recursive calls to f()
//             }
//             cache[n] = value;
//         }
//         return value;
//     }
//     return f(n);
// }

// Solution using recursion and memo, with separate function for calculating fib

function fib(n) {
    let cache = Array(n);

    function fibMemo(n) {
        let value = cache[n];
        // if there is no value at cache[n]:
        if (!value) {
            value = fibRecurse(n);
            cache[n] = value;
        }
        return value;
    }

    function fibRecurse(n) {
        if (n < 2) {
            return n;
        } // else...
        return fibMemo(n - 2) + fibMemo(n - 1);
    }

    return fibMemo(n);
}

console.log('fib file run');
console.log(fib(11));