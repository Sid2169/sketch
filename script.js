let gridDimension = 16;
createNewGrid(gridDimension);

//Event listerner for grid-tool for showing and hindig the grid-tool-menu
document.getElementById('grid-tool').addEventListener('click', () => {
    if(document.getElementById('grid-tool-menu').classList.contains('hidden')) {
        document.getElementById('grid-tool-menu').classList.remove('hidden');
    }
    else {
        document.getElementById('grid-tool-menu').classList.add('hidden');
    }
});
//hide the grid-tool-menu when the user clicks outside the grid-tool-menu
document.addEventListener('click', (event) => {
    if (!event.target.closest('#grid-tool')) {
        document.getElementById('grid-tool-menu').classList.add('hidden');
    }
});
//Add event listerner of the each grid-size options in grid tool menu




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