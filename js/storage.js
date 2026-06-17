const STORAGE_KEY = 'pennydrop_expenses';

const StorageHandler = {
    // Save array to LocalStorage
    save(data) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    },
    
    // Read array from LocalStorage
    load() {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    }
};
