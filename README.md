# Sudoku Solver

## Dependencies
To run the solver you'll need `react-create-app` and `yarn` installed. 

## Starting the app
```
yarn install
yarn run
```

## Using the application

### Setting values
The left side sudoku board is editable. Click on any row to edit it's value. After clicking on a row all its peers will be highlighted. 

*Note: Cells will only select valid inputs. You will not be able to set a cell to a value that is used in its peer cells.*

### Solving
This app takes a two part approach to solving a sudoku. Hit 'solve' to have the application solve the inputted puzzle.

#### First Pass (Peer evaluation)
The sudoku is cycled over. Each cell is checked to see what values its peers use. If there is only one possible value for the given cell, that cell is considered found. This process is repeated until a cycle is completed without setting any new values. 

#### Second Pass (Brute Force)
Since the remaining cells could be multiple values the app take a brute force approach to solving the puzzle. 

The first empty row to '1'. If the value is valid, move to the next row. If not set the value to '2'. When the app repeadly attempt to set the value of a row, but no value between 1-9 is valid, it backtrack to the previous row. The previous row is then set to value + 1. 

### Clearning
To clear the sudoku boards click 'Clear'.


