# Sapper game on native JS in functional style

![hard-settings](https://user-images.githubusercontent.com/105659797/192714865-80246391-2cb1-4cfe-8282-dfcd9099d8ae.jpg)

The interface design of this web application is based on the Chrome version of the online minesweeper.
But, unlike the Google version, my version of this sapper is written
without the use of canvas'a, as in the original.

  ## Functionality, development, description:

###### -> The board is created using a two-dimensional matrix and, when changing the mode, clears all cells recursively and randomly recreates the array with bombs.

###### -> Cell location calculation is implemented through two XY indices (vertically and horizontally). In this case, the work is done within the same array, in which the DOM elements are hung.

###### -> The number of flags is tied to the length of the array with bombs. And the implementation, so that the program understands in which cell the flag is set, is made through Set, in order to clear the repeated values ​​of the indexes of elements on the board (the user can put a flag on the same field several times per game).

###### -> Implemented a random transfer event for a mine, if the user hits it on the first click.
![first-click-anim](https://user-images.githubusercontent.com/105659797/192715065-31c2c34c-6457-4b2b-8397-d14ea114c79c.jpg)

###### -> At any opening of the fields, including the recursive first click, if the flags are on the playing field, the counter of flags does not break and replenishes the number of "disappeared" flags back.

###### -> :hover effect on all non-open fields (opacity === 0.5)

###### -> Animation of victory and defeat, sound effects
![win-anim](https://user-images.githubusercontent.com/105659797/192715126-e6f5b8b4-e395-4847-826e-20a325b53aea.jpg)
###### -> Animation of lose:
![lose-anim](https://user-images.githubusercontent.com/105659797/192715137-6ccf527c-21cd-4d5c-8bd8-ac722d9eb4a7.jpg)
###### -> The other two game modes
![normal-setting](https://user-images.githubusercontent.com/105659797/192715160-220068e9-81fc-4947-a209-23d2b6450b75.jpg)
![easy-setting](https://user-images.githubusercontent.com/105659797/192715169-2914bf15-0bc4-4a6a-8cba-1af26bfad02b.jpg)
