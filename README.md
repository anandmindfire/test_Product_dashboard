# React Debug Test - Product Dashboard

## Setup

1. Create a Vite React + TS app  
   npm create vite@latest

2. Install deps  
   npm install

3. Replace App.tsx with given file

4. Add products.json inside src/

5. Run  
   npm run dev

## Task
Fix all bugs without rewriting the app.

## Known Issues (11 Bugs)

- Wrong state type initialization
- useEffect causing infinite re-render
- Incorrect filtering condition
- Sorting mutates state + wrong comparator
- Event handler incorrectly invoked
- Wrong key used in list rendering
- Possible undefined access crash
- Incorrect empty state check (type mismatch)
- Missing dependency handling in hook
- Invalid initial state causing runtime issues
- JSON handling assumptions without fallback
