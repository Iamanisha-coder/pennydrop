# 🪙 PennyDrop — Expense Tracker

PennyDrop is a sleek, minimalist, single-page web application designed to help users log and manage their daily expenses. Built entirely with pure frontend technologies, it calculates spending dynamically and saves data instantly using the browser's persistent storage.

---

## 🚀 Features

* **Real-time Calculations:** Instantly sums your spending as soon as you add an item.
* **Persistent Storage:** Uses the browser's `localStorage` API so your expense history is safely saved even if you refresh or close the page.
* **Categorization:** Easily tag expenses under Food, Rent, Utilities, Entertainment, or Other.
* **Clean & Responsive UI:** A modern, mobile-friendly card layout focused on scannability.

---

## 📂 Project Structure

The project separates logic, storage, and UI layers using standard vanilla web development practices:

```text
pennydrop/
│
├── index.html              # Main UI layout (Dashboard, entry form, and list)
│
├── css/
│   └── style.css           # Global typography, color variables, and component styles
│
└── js/
    ├── storage.js          # LocalStorage handlers for persistent data loading/saving
    ├── tracker.js          # Core business logic (math calculations and state tracking)
    └── app.js              # DOM bridge linking user events to tracker functions
