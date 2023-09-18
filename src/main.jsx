import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Animation from './components/borderAnimation.jsx'
import './style/index.css'
import './style/animation.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Animation/>
  </React.StrictMode>,
)
