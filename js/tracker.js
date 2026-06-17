// State management initialized from local database
let expenses = StorageHandler.load();

const Tracker = {
    // Generate functional data item structure
    addExpense(description, amount, category) {
        const item = {
            id: Date.now(),
            description,
            amount: parseFloat(amount),
            category,
            date: new Date().toLocaleDateString()
        };
        expenses.push(item);
        StorageHandler.save(expenses);
        return item;
    },

    // Total expense sum math logic
    calculateTotal() {
        return expenses.reduce((sum, item) => sum + item.amount, 0);
    },

    // Get current expense collection
    getAll() {
        return expenses;
    }
};
