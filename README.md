# Sapper game on native JS in functional style 🎮


### Live Demo GIF 🎥

![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/105659797/194524184-cc2a0d0d-ca5a-4a02-9cca-16b0bcee4016.gif)


    - The interface design of this web application is based on the Chrome version of the online minesweeper.  
      But, unlike the Google version, my version of this sapper is written without the use of canvas'a, as in the original.

  ## Functionality, development, description:
  - The board is created using a two-dimensional matrix and, when changing the mode, clears all cells recursively and randomly recreates the array with bombs.

  - Cell location calculation is implemented through two XY indices (vertically and horizontally). In this case, the work is done within the same array, in which the DOM elements are hung.

  - The number of flags is tied to the length of the array with bombs. And the implementation, so that the program understands in which cell the flag is set, is made through Set, in order to clear the repeated values ​​of the indexes of elements on the board (the user can put a flag on the same field several times per game). 🚩

  - Implemented a random transfer event for a mine, if the user hits it on the first click.

  - At any opening of the fields, including the recursive first click, if the flags are on the playing field, the counter of flags does not break and replenishes the number of "disappeared" flags back.

  - :hover effect on all non-open fields (opacity === 0.5)

  - Animation of victory and defeat 🔊
  - Animation of lose 
  - The other two game modes
  - Music effects 🎵


## Start 

```
1. npm install
```

## Library load

```
1. npm start
```

