let colorMode = true;
let rainbowMode = false;
let shadingMode = false;
let penColor = 'black';
//Add 8px border of penColor to the color-picker button
document.getElementById('color-picker').style.border = `8px solid ${penColor}`;
//Add highlight to color-picker button
document.getElementById('color-picker').classList.add('highlight');
let gridDimension = 16;
createNewGrid(gridDimension);


//Event listerner for grid-tool for showing and hindig the grid-tool-menu
document.getElementById('grid-tool').addEventListener('click', () => {
    if (document.getElementById('grid-tool-menu').classList.contains('hidden')) {
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
document.querySelectorAll('.grid-sizes').forEach((gridSize) => {
    gridSize.addEventListener('click', () => {
        //Before creating a new grid, ask the user if they want to clear the current grid
        if (document.getElementById('grid')) {
            if (!confirm('Creating a new grid will clear the current grid. Do you want to continue?')) {
                return;
            }
        }
        gridDimension = parseInt(gridSize.id.slice(-3));
        createNewGrid(gridDimension);
    });
});

//Add event listerner to shading-tool button
document.getElementById('shading-tool').addEventListener('click', () => {
    if (shadingMode) {
        shadingMode = false;
        //remove highlight from shading-tool button
        document.getElementById('shading-tool').classList.remove('highlight');
        //Set opacity of untouched grid cells to 1
        const gridCells = document.querySelectorAll('.grid-cell');
        gridCells.forEach((cell) => {
            if (!cell.classList.contains('colored')) {
                cell.style.opacity = 1;
            }
        });
    }
    else {
        shadingMode = true;
        //highlight shading-tool button
        document.getElementById('shading-tool').classList.add('highlight');
        //Set opacity of untouched grid cells to 0
        const gridCells = document.querySelectorAll('.grid-cell');
        gridCells.forEach((cell) => {
            if (!cell.classList.contains('colored')) {
                cell.style.opacity = 0;
            }
        });
    }
});

//Add event listener to input inside color-picker button
document.querySelector('#color-picker input').addEventListener('input', (event) => {
    penColor = event.target.value;
    colorMode = true;
    //add highlight to color-picker button
    document.getElementById('color-picker').classList.add('highlight');
    //Add a 8px border of penColor to the color-picker button
    document.getElementById('color-picker').style.border = `8px solid ${penColor}`;

    rainbowMode = false;
    //remove highlight from rainbow-tool button
    document.getElementById('rainbow-mode').classList.remove('highlight');
});

//Add event listener to rainbow-mode button
document.getElementById('rainbow-mode').addEventListener('click', () => {
    if (rainbowMode) {
        rainbowMode = false;
        colorMode = true;
        //remove highlight from rainbow-tool button
        document.getElementById('rainbow-mode').classList.remove('highlight');
        //Add a 8px border of penColor to the color-picker button
        document.getElementById('color-picker').style.border = `8px solid ${penColor}`;
    }
    else {
        rainbowMode = true;
        //highlight rainbow-tool button
        document.getElementById('rainbow-mode').classList.add('highlight');
        colorMode = false;
        //remove highlight from color-picker button
        document.getElementById('color-picker').classList.remove('highlight');
        //remove 8px border of penColor from the color-picker button
        document.getElementById('color-picker').style.border = 'none';
    }
});



//Function to create a new grid
function createNewGrid(size) {
    // Remove the old grid if it exists
    const oldGrid = document.getElementById('grid');
    if (oldGrid) {
        document.querySelector('body').removeChild(oldGrid);
    }

    //Turn of shadingMode and remove highlight from shading-tool button
    shadingMode = false;
    document.getElementById('shading-tool').classList.remove('highlight');

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
            gridCell.style.opacity = 1; // Initialize opacity during grid creation

            //Pen behaviour on mousedown on grid cell
            gridCell.addEventListener('mousedown', () => {
                //Behaviour when colorMode is on and shadingMode is off
                if (colorMode && !shadingMode) {
                    gridCell.style.backgroundColor = penColor;
                    gridCell.classList.add('colored');
                    gridCell.style.opacity = 1;
                }
                //Behaviour when colorMode and shadingMode is on
                if (colorMode && shadingMode) {
                    gridCell.style.backgroundColor = penColor;
                    gridCell.classList.add('colored');
                    gridCell.style.opacity = gridCell.style.opacity || 0;
                    gridCell.style.opacity = Math.min(1, parseFloat(gridCell.style.opacity) + 0.1);
                }
                //Behaviour when rainbowMode is on and shadingMode is off
                if (rainbowMode && !shadingMode) {
                    const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
                    gridCell.style.backgroundColor = randomColor;
                    gridCell.classList.add('colored');
                    gridCell.style.opacity = 1;
                }
                //Behaviour when rainbowMode and shadingMode is on
                if (rainbowMode && shadingMode) {
                    const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
                    gridCell.style.backgroundColor = randomColor;
                    gridCell.classList.add('colored');
                    gridCell.style.opacity = gridCell.style.opacity || 0;
                    gridCell.style.opacity = Math.min(1, parseFloat(gridCell.style.opacity) + 0.1);
                }

            });
            //Pen behaviour on mouseover on grid cell
            gridCell.addEventListener('mouseover', () => {
                if (isDrawing) {
                    //Behaviour when colorMode is on and shadingMode is off
                    if (colorMode && !shadingMode) {
                        gridCell.style.backgroundColor = penColor;
                        gridCell.classList.add('colored');
                        gridCell.style.opacity = 1;
                    }
                    //Behaviour when colorMode and shadingMode is on
                    if (shadingMode && shadingMode) {
                        gridCell.style.backgroundColor = penColor;
                        gridCell.classList.add('colored');
                        gridCell.style.opacity = gridCell.style.opacity || 0;
                        gridCell.style.opacity = Math.min(1, parseFloat(gridCell.style.opacity) + 0.1);
                    }
                    //Behaviour when rainbowMode is on and shadingMode is off
                    if (rainbowMode && !shadingMode) {
                        const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
                        gridCell.style.backgroundColor = randomColor;
                        gridCell.classList.add('colored');
                        gridCell.style.opacity = 1;
                    }
                    //Behaviour when rainbowMode and shadingMode is on
                    if (rainbowMode && shadingMode) {
                        const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
                        gridCell.style.backgroundColor = randomColor;
                        gridCell.classList.add('colored');
                        gridCell.style.opacity = gridCell.style.opacity || 0;
                        gridCell.style.opacity = Math.min(1, parseFloat(gridCell.style.opacity) + 0.1);
                    }
                }
            });
            gridRow.appendChild(gridCell);
        }
        grid.appendChild(gridRow);
    }
    document.querySelector('body').appendChild(grid);
}