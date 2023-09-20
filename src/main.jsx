import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Animation from './components/borderAnimation.jsx'
import Scroll from './components/scrollAnimation.jsx'
import Spring from './components/springAnimation.jsx'
import './style/index.css'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < Spring/>
  </React.StrictMode>,
)
