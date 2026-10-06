# Dev Stack Builder

A React-based Dev Stack Builder that lets developers explore popular technologies and create a personalized development stack.

## Technologies

- React.js
- Vite
- JavaScript (ES6+)
- CSS
- JSON
- React-Toastify

## Features

1. Explore technologies loaded from a local JSON file.
2. Add and remove technologies from a personal stack.
3. Get toast notifications for add, duplicate, remove, and remove-all actions.

## React Questions

### 1. What is JSX, and why is it used in React?
JSX lets us write HTML-like UI code inside JavaScript. It makes React components easier to read and write.

### 2. What is the difference between props and state?
Props are data passed into a component by its parent. State is data managed inside a component that can change over time.

### 3. What does the useState hook do, and where did you use it?
`useState` creates state in a functional component. I used it for the technology list, selected stack, and loading state.

### 4. What does useEffect do, and why did you need it to load JSON data?
`useEffect` runs side effects after rendering. I used it to fetch the local JSON file when the app loads.

### 5. Why does every item in a .map() list need a unique key prop?
React uses the key to identify each list item efficiently when items are added, removed, or changed.

### 6. What is conditional rendering?
Conditional rendering means showing different UI depending on a condition. I used it to show the empty stack message when no technology is selected.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back?
A parent passes data through props. A child can call a function received through props to send an action or information back to the parent.
