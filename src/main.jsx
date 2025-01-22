import React  from 'react'
import { createRoot } from 'react-dom/client'
import App from '/src/componets/App.jsx'


 const root = createRoot(document.querySelector('#root'));
 
root.render(<App />)
