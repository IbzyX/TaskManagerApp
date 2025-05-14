function addRow() {
    const grid = document.getElementById('grid');
    const newRow = document.createElement('div');
    newRow.className = 'grid-row';

    for (let i = 1; i <= 5; i++) {
        const cell = document.createElement('div');
        cell.className = 'grid-cell';
        cell.textContent = `Row ${grid.children.length} - Col ${i}`;
        newRow.appendChild(cell);
    }

    grid.appendChild(newRow);
}
