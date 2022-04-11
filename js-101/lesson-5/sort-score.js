/*
scores is an array of subarrays that each contain 3 elements
This is an array that represents the scores for 3 players
in a game of 3 rounds.

We want to sort the players in ascending order of their total score.


[ [ 1, 4, 2 ], [ 3, 6, 4 ], [ 6, 8, 9 ] ]; (we want this return order)
*/

let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];

scores.sort((a, b) => {
  let totalAScore = a.reduce((number, next) => number + next);
  let totalBScore = b.reduce((number, next) => number + next);
  return totalAScore - totalBScore;
});

console.log(scores);

/*
Here, a and b will be assigned to the subarrays.
We use Array.prototype.reduce to find
the sum of all three scores in the subarrays,
then return their difference,
which will be used to sort our arrays.
*/