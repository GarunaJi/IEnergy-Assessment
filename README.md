# Movie Listing Website

This is a **responsive movie listing website** built with **React.js**, demonstrating modern frontend development practices, including:

- React Hooks
- Context API for global state management
- API integration using **OMDb API**
- Responsive design with mobile, tablet, and desktop breakpoints
- Search functionality with **debouncing** and **type-ahead suggestions**
- Infinite scroll for seamless movie browsing
- **React Router** for multi-page navigation
- **Material-UI** for UI components and layout

---



## 📚 Features

### 1. Movie Listing Page
- Displays a grid of movies fetched from the **OMDb API**.
- Infinite scroll to automatically load more movies as the user scrolls.
- Search bar with:
    - **Debounced search (with lodash debounce)** to avoid excessive API calls.
    - **Type-ahead suggestions** that show movie titles matching the search query.
- Responsive grid layout for different devices (mobile, tablet, desktop).

### 2. Movie Details Page
- Displays **detailed information** about the selected movie.
- Includes back navigation to the listing page.
- Fully responsive design.

### 3. Search Functionality
- Implements search with:
    - Debouncing to minimize API calls.
    - Dynamic suggestion dropdown.
    - Clicking a suggestion loads the movie details page.

### 4. Error Handling & Loading States
- API errors are gracefully handled and shown to the user.
- Loading indicators appear during API fetches.

---

## 🛠️ Tech Stack

| Technology        | Description                                                                          

| React.js                                                                       |
| React Router                                                       |
| Material-UI                                                  |
| Context API        .                                   
| OMDb API                                                         
| CSS/SCSS           |                                                                 |

---



