function addRow() {
    const grid = document.getElementById('grid');
    const newRow = document.createElement('div');
    newRow.className = 'grid-row';

    // Create 4 content cells
    for (let i = 1; i <= 4; i++) {
        const cell = document.createElement('div');
        cell.className = 'grid-cell';
        cell.textContent = `Task ${grid.children.length} - Col ${i}`;
        newRow.appendChild(cell);
    }

    // COMPLETE button
    const completeCell = document.createElement('div');
    completeCell.className = 'grid-cell';
    const completeBtn = document.createElement('button');
    completeBtn.className = 'complete-btn';
    completeBtn.textContent = 'Complete';
    completeBtn.onclick = () => moveToCompleted(newRow);
    completeCell.appendChild(completeBtn);
    newRow.appendChild(completeCell);

    // DELETE button
    const deleteCell = document.createElement('div');
    deleteCell.className = 'grid-cell';
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => newRow.remove();
    deleteCell.appendChild(deleteBtn);
    newRow.appendChild(deleteCell);

    grid.appendChild(newRow);
}

function moveToCompleted(row) {
    const completedGrid = document.getElementById('completed-grid');
    const completedRow = document.createElement('div');
    completedRow.className = 'grid-row';

    // Copy only the first 4 cells
    for (let i = 0; i < 4; i++) {
        const cell = document.createElement('div');
        cell.className = 'grid-cell';
        cell.textContent = row.children[i].textContent;
        completedRow.appendChild(cell);
    }

    completedGrid.appendChild(completedRow);
    row.remove(); // Remove original row
}