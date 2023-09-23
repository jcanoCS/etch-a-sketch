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
        // Add hover event listener
        square.addEventListener('mouseover', () => {
        // Change the button's background color
        square.style.backgroundColor = '#00FF7F';
        });
  
        // Reverse hover effect
        square.addEventListener('mouseout', () => {
            // Change the button's background color back to its original color
            square.style.backgroundColor = '';
        });
        
        square.classList.add('square');
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