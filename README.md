# Sapper game on native JS in functional style

![hard-settings](https://user-images.githubusercontent.com/105659797/190439129-9852dd72-ea3f-469c-aa81-1b4d552aa88a.jpg)
![easy-settings](https://user-images.githubusercontent.com/105659797/190651573-707cc762-5659-44bc-8d49-4d625506f992.jpg)
![normal-settings](https://user-images.githubusercontent.com/105659797/190651581-35df1fca-d6ea-4ecd-88ed-dbc36975ae15.jpg)

The interface design of this web application is based on the Chrome version of the online minesweeper.
But, unlike the Google version, my version of this sapper is written
without the use of canvas'a, as in the original.

  ## Functionality, development, description:

###### -> The board is created using a two-dimensional matrix and, when changing the mode, clears all cells recursively and randomly recreates the array with bombs.

###### -> Cell location calculation is implemented through two XY indices (vertically and horizontally). In this case, the work is done within the same array, in which the DOM elements are hung.

###### -> The number of flags is tied to the length of the array with bombs. And the implementation, so that the program understands in which cell the flag is set, is made through Set, in order to clear the repeated values ​​of the indexes of elements on the board (the user can put a flag on the same field several times per game).

###### -> Implemented a random transfer event for a mine, if the user hits it on the first click.
![first-clock-animation](https://user-images.githubusercontent.com/105659797/190439281-6b1befbd-5f53-414b-be6b-998398ea10c0.jpg)

###### -> At any opening of the fields, including the recursive first click, if the flags are on the playing field, the counter of flags does not break and replenishes the number of "disappeared" flags back.

###### -> :hover effect on all non-open fields (opacity === 0.5)

###### -> Animation of victory and defeat, sound effects
![game-over-animation](https://user-images.githubusercontent.com/105659797/190439458-404f84b9-31f0-4dad-b76c-dee5c8f6217f.jpg)

![flags](https://user-images.githubusercontent.com/105659797/190439428-18547a9d-b6cb-49df-98fa-acbd4060e0f5.jpg)

