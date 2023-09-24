// ********************** LOCAL VARIABLES ***********************************
const GRID_ID = "current-grid"


// ********************* HELPER FUNCTIONS **********************************
function generateRow(numColumns) {
    // creating a row div to add squares to
    const row = document.createElement('div');
    row.classList.add('row');

    // loop to create and add multiple squares to the row
    for(let i = 0; i < numColumns; i++) {
        // create square button
        const square = document.createElement('div');
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
        const row = generateRow(numRows);
        grid.appendChild(row);
    }

    return grid;
}

function removeCurrentGrid(gridID) {
    let currentGrid = document.getElementById(gridID);
    // if a current grid exists, remove it from DOM
    if(currentGrid){
        document.body.removeChild(currentGrid);
        // delete from memory
        currentGrid = null;
    }
}
// *************************************************************************



const dimmensionButton = document.getElementById('dimm-btn');


// Generate button event listener for user input (grid dimmensions)
dimmensionButton.addEventListener('click', () => {
    // If a current grid exists, remove it
    removeCurrentGrid(GRID_ID);
    // Prompting user for size of the grid
    let dimmension = prompt("Enter The Grid Dimmension (1-100): ");
    // creating grid with user's dimmension input
    let newGrid = generateGrid(dimmension);
    // adding id idnetifier to the new grid
    newGrid.setAttribute("id", GRID_ID);
    // adding the grid to the DOM
    document.body.appendChild(newGrid);
});