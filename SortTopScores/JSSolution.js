// Define sortTopScores function, 
// which takes scores (array) and highestpossibleScore (int) as arguments

sortTopScores = (scores, highestpossibleScore) => {

    // initialize an array 'scoresCounted' filled with 0s with length === highestpossibleScore
    let scoresCounted = Array(highestpossibleScore).fill(0);

    // loop through scores array and for each score, increment the count by 1 
    // in the scoresCounted array at the index equal to that score
    scores.forEach(score => {
        scoresCounted[score]++;
    })

    // initialize an empty array 'sortedScores'
    let sortedScores = [];

    // loop backward from highestPossibleScore to 0
    for (let score = highestpossibleScore; score >=0; score--) {
        // initialize a variable to represent the count for a given score:
        const count = scoresCounted[score];
        // for each counted score, loop through the count 
        // and push that score onto the sortedScores array
        for (let i = 0; i < count; i++) {
            sortedScores.push(score);
          }
    }

    // return sortedScores
    return sortedScores;
}

// Test:
console.log(sortTopScores([11,32,31,31,24,75,75], 100));
