import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import stores from './components/store.js'
import { Provider } from 'react-redux'
createRoot(document.getElementById('root')).render(
  <Provider store={stores}>

    <App />
  </Provider>

)
