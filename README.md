# Knights-Travais

The goal of this project was to create a program that could accept two spaces on a chess board /*formatted [2,3] etc. */ and return every square touched on the fastest path between them. 

The program creates a binary tree of all of the squares and then uses that to create a circular tree that connects every square to every square it could possibly move to. 

A recursive function then goes through every possible move combination and then returns an array with the touched squares values. While this happens it also compares the lengths of returns arrays and only passes on the shortest. So that the final array returned is one of the fastest possible combinations. In the case of ties, it chooses arbitrarily based on order of arrival. 

Previous builds of this function used numbers to track the length as I was unsure how to return the values while also tracking the lengths of each path. My plan was to plug this length into essentially the same function and find a route using that length as the run cap, until I had the idea to return plain arrays. 

This was an idea I had early on in the project, but my mistake was using arrays defined in the function parameters. In these early builds I would end up with an array of every square touched across all possible pathings because of poor scope control. 

There are also many early builds containing functions that I had not taken the time to test properly and were therfore broken. I plan to learn from this assignment in the future and will implement pre-testing and mock testing strategies. 