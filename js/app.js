document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('expense-form');
    const descInput = document.getElementById('desc');
    const amountInput = document.getElementById('amount');
    const categoryInput = document.getElementById('category');
    const totalDisplay = document.getElementById('total-amount');
    const listDisplay = document.getElementById('expense-list');

    // Update screen display interface
    function updateUI() {
        // Update Running Balance Total
        totalDisplay.textContent = `$${Tracker.calculateTotal().toFixed(2)}`;

        // Clear and redraw modern listing history
        listDisplay.innerHTML = '';
        Tracker.getAll().forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `
                <div>
                    <div class="item-desc">${item.description}</div>
                    <div class="item-cat">${item.category} • ${item.date}</div>
                </div>
                <div class="item-amt">-$${item.amount.toFixed(2)}</div>
            `;
            listDisplay.appendChild(li);
        });
    }

    // Capture User Form Submit Action
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        Tracker.addExpense(
            descInput.value,
            amountInput.value,
            categoryInput.value
        );

        // Reset Inputs & Refresh Screen Display
        form.reset();
        updateUI();
    });

    // Run structural update layout on initial boot
    updateUI();
});
