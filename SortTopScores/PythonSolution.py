# Define function to sort top scores. Function parameters include int 'highest_possible_score' and list 'scores'

def sort_top_scores(scores, highest_possible_score):
    # init a list with length highest_possible_score filled with 0s
    scores_counted = [0 for _ in range(highest_possible_score)]
    print(scores_counted)
    # step through scores and increment the value at the index of each score in scores_counted
    # to get the count of how many times each score appears
    for score in scores:
        scores_counted[score] += 1

    # init a list to hold the sorted scores
    sorted_scores = []

    # iterate through our scores_counted list;
    # for each count, append the score that many number 
    # of times to our sorted_scores list
    # note: syntax for range() func is range(start, stop, step)
    for score in range(highest_possible_score - 1, -1, -1): # step through every int backward from highest_possible_score to 0
        print(score)
        # for every possible score, check how many times that score was counted
        count = scores_counted[score]

        # step through the count, and for each time a score is counted, append that score to the sorted_scores list
        for i in range(count):
            sorted_scores.append(score)
        # because the outer loop goes backward from highest to 0,
        # highest scores are appended first in sorted_scores
    return sorted_scores

# Tests:

print(sort_top_scores([1,2,3,4,5], 6))

print(sort_top_scores([11,32,31,24,75], 100))

