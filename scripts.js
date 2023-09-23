// ********************** LOCAL VARIABLES ***********************************
const DIMMENSION = 16;


// ********************* HELPER FUNCTIONS **********************************
function generateRow(numColumns) {
    // creating a row div to add squares to
    const row = document.createElement('div');
    row.classList.add('row');

    // loop to create and add multiple squares to the row
    for(let i = 0; i < numColumns; i++) {
        // create square button
        const square = document.createElement('button');
        // adding square class to the square button
        square.classList.add('square');

        // Hover event listener
        square.addEventListener('mouseover', () => {
            // Adding hover class to square
            square.classList.add('hover');
        });    
        // add the finalized square to the row
        row.appendChild(square);
    }

    return row;
}

function generateGrid(numRows) {
    // create a grid div
    const grid = document.createElement('div');
    grid.classList.add('grid');
    
    // loop to create and add multiple rows to the grid
    for(let i = 0; i < numRows; i++) {
        const row = generateRow(DIMMENSION);
        grid.appendChild(row);
    }

    return grid;
}
// *************************************************************************



// adding a grid to the body of the html file
const newGrid = generateGrid(DIMMENSION);
document.body.appendChild(newGrid);