import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
let persons=[{name:"shubham",roll:21},{name:"vijay",roll:20}]
createRoot(document.getElementById('root')).render(
  <StrictMode>
  
   <App></App>
  </StrictMode>,
)
