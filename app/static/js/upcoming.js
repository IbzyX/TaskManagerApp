function addRow() {
    const grid = document.getElementById('grid');
    const newRow = document.createElement('div');
    newRow.className = 'grid-row';

    // Add 5 content cells
    for (let i = 1; i <= 5; i++) {
        const cell = document.createElement('div');
        cell.className = 'grid-cell';
        cell.textContent = `Row ${grid.children.length} - Col ${i}`;
        newRow.appendChild(cell);
    }

    // Add Delete Button Cell
    const actionCell = document.createElement('div');
    actionCell.className = 'grid-cell';

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => newRow.remove();

    actionCell.appendChild(deleteBtn);
    newRow.appendChild(actionCell);

    grid.appendChild(newRow);
}