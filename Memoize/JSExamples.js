// addTen function that adds 10 to an input number:
function addTen(n) {
    return sum = n + 10;
}

// // memoizedAddTen function specific to addTen:
// const memoizedAddTen = () => {
//     let cache = {};

//     return (n) => {
//         if (n in cache) {
//             console.log('result found in cache');
//             return cache[n];
//         } else {
//             console.log('calculating result');
//             let result = n + 10;
//             cache[n] = result;
//             return result;
//         }
//     }

// }

// const newAdd = memoizedAddTen();

// console.log(newAdd(9));
// console.log(newAdd(9));

// *
// * Memoization takeaways from above code:
// *
// memoizedAdd returns a function which is invoked later. 
// This is possible because in JavaScript, functions are first class objects, 
// which lets us use them as higher order functions that return another function.
// cache can remember its values since the returned function has a closure over it.
// It’s essential that the memoized function is pure. 
// A pure function will return the same output for a particular input no mater how many times it’s called, which makes the cache work as expected.
// *
// * 
// *

// Generalizable memoize function:
    // takes a function as arg and returns a memoized function
const memoize = (fn) => {
    let cache = {};
    return (...args) => {       // taking destructured args array
        let n = args[0];        // taking only first arg

        // if cache[n] exists, return the value/arg at that index:
        if (n in cache) {
            console.log('result found in cache');
            return cache[n];    // return the value/arg found at cache[n]
        } 
        
        // if cache[n] doesn't exists, call fn(n), store the result at cache[n], and return the result:
        else {
            console.log('calculating result');
            let result = fn(n); // call the function fn(n) passed to memoize(fn) to get result
            cache[n] = result;  // store the result at cache[n]
            return result;      // return the result
        }
    }
}

const memoizedAddTen = memoize(addTen);

console.log(memoizedAddTen(9));
console.log(memoizedAddTen(9));