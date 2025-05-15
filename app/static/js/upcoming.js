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

    // Copy first 4 task cells
    for (let i = 0; i < 4; i++) {
        const cell = document.createElement('div');
        cell.className = 'grid-cell';
        cell.textContent = row.children[i].textContent;
        completedRow.appendChild(cell);
    }

    // Return Button
    const returnCell = document.createElement('div');
    returnCell.className = 'grid-cell';
    const returnBtn = document.createElement('button');
    returnBtn.className = 'return-btn';
    returnBtn.textContent = 'Return';
    returnBtn.onclick = () => returnToActive(completedRow);
    returnCell.appendChild(returnBtn);
    completedRow.appendChild(returnCell);

    completedGrid.appendChild(completedRow);
    row.remove(); // Remove from active grid
}

function returnToActive(row) {
    const grid = document.getElementById('grid');
    const newRow = document.createElement('div');
    newRow.className = 'grid-row';

    // Copy 4 task cells
    for (let i = 0; i < 4; i++) {
        const cell = document.createElement('div');
        cell.className = 'grid-cell';
        cell.textContent = row.children[i].textContent;
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
    row.remove(); // Remove from completed grid
}