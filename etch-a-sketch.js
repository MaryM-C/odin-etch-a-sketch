
const gridContainer = document.getElementById('grid');
const btnUpdateGrid = document.getElementById('updateGrid');
let rowNumber = 16;

function createGrid(rowNumber) {
    for (let index = 0; index < rowNumber; index++) {
        const row = document.createElement('div');
        row.className = 'row container';
        gridContainer.appendChild(row);
        for (let index = 0; index < rowNumber; index++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.addEventListener('mouseover', (e)=> {
                cell.style.background='#e5e2e3';
            })  
            row.appendChild(cell);
        }
    } 
}

btnUpdateGrid.addEventListener('click', (e) => {
    const newGridSize = Number(window.prompt('Change the grid size (2-100): ', "2"));
    document.getElementById('gridSize').textContent = newGridSize + 'x' + newGridSize;
    gridContainer.replaceChildren();
    createGrid(newGridSize);
})

createGrid(rowNumber);