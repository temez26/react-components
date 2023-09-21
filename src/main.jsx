import React from 'react'
import ReactDOM from 'react-dom/client'
import Border from './components/borderAnimation.jsx'
import Scroll from './components/scrollAnimation.jsx'
import Spring from './components/springAnimation.jsx'
import Lottief from './components/lottieAnimation.jsx'
import Curve from './components/curveBackground.jsx'
import './style/index.css'

/*Remember to load the right css fiel for right component*/
import './style/curveBackground.css'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < Curve/>
  </React.StrictMode>,
)
