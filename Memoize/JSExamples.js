// addTen function that adds 10 to an input number:
function addTen(n) {
    return sum = n + 10;
}

// memoizedAddTen function specific to addTen:
const memoizedAddTen = () => {
    let cache = {};

    return (n) => {
        if (n in cache) {
            console.log('result found in cache');
            return cache[n];
        } else {
            console.log('calculating result');
            let result = n + 10;
            cache[n] = result;
            return result;
        }
    }

}

const newAdd = memoizedAddTen();

console.log(newAdd(9));
console.log(newAdd(9));