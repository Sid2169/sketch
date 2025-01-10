let gridDimension = 16;
createNewGrid(gridDimension);


//Function to create a new grid
function createNewGrid(size) {
     // Remove the old grid if it exists
     const oldGrid = document.getElementById('grid');
     if (oldGrid) {
         document.querySelector('body').removeChild(oldGrid);
     }
    
    // Create a new grid
    const grid = document.createElement('div');
    grid.id = 'grid';
    let isDrawing = false;
    document.body.addEventListener('mousedown', () => {
        isDrawing = true;
    });
    document.body.addEventListener('mouseup', () => {
        isDrawing = false;
    });
    for (let i = 0; i < size; i++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        for (let j = 0; j < size; j++) {
            const gridCell = document.createElement('div');
            gridCell.classList.add('grid-cell');
            gridCell.addEventListener('mouseover', () => {
                if (isDrawing) {
                    gridCell.style.backgroundColor = 'black';
                }
            });
            gridCell.addEventListener('mousedown', () => {
                gridCell.style.backgroundColor = 'black';
            });
            gridRow.appendChild(gridCell);
        }
        grid.appendChild(gridRow);
    }
    document.querySelector('body').appendChild(grid);
}