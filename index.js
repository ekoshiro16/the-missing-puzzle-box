/*
You are a toy creator for Toys 'R Us. There is a new toy that is all the rage - a puzzle box that acts a lot like a Russian doll, where there are many smaller boxes within the main box that are all slightly smaller than the next. Unfortunately, the factory that produces these puzzle toys messed up, and packed the smaller boxes out of order in the main puzzle box. Worse yet, they seem to have mispackaged each toy - every puzzle box is missing one of its smaller boxes. We need to fix this issue before we get fired!

Write an algorithm that accepts an array of arrays, where each nested array element is a different length, and no nested array is the same length as any other. Based on the length of the outer puzzle array, there are nested arrays of each length up to the length of the main array PLUS one (because remember, each puzzle is missing one of its smaller boxes!)

For example:
If you have the following puzzle toy:
[
    ["c", "c", "c"]
    ["b", "b"],
    ["a"],
    ["e", "e", "e", "e", "e"],
    ["f", "f", "f", "f", "f", "f"]
]

Notice that the length of the puzzle toy array is 5, so the "biggest" nested array element is of length 6 (the ["f", "f", "f", "f", "f", "f"] nested array). There are also nested arrays of each length, from 1 all the way to 6. However, one of the arrays is missing. In this case, the ["d", "d", "d", "d"] array is missing, because we only have arrays of length 1, 2, 3, 5, and 6. 

Your algorithm should first reorganize the "puzzle" array in descending order (largest nested array to smallest).

Your algorithm should also return the length of the missing nested array. 

In the above example, your algorithm would return 4, since that was the nested array that was missing. 
*/

// Write your code below: 