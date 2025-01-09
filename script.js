const gridDimension = 128;
const grid = document.createElement('div');
grid.classList.add('grid');

for (let i = 0; i < gridDimension; i++) {
    const gridRow = document.createElement('div');
    gridRow.classList.add('grid-row');
    for (let j = 0; j < gridDimension; j++) {
        const gridCell = document.createElement('div');
        gridCell.classList.add('grid-cell');
        gridRow.appendChild(gridCell);
    }
    grid.appendChild(gridRow);
}
document.querySelector('body').appendChild(grid);