import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import logo from './assets/logo shreeinsul.png'
import FactoryContextProvider from './Context/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FactoryContextProvider>
      <Suspense
      fallback={
        <div className="loader-container">
          <div><img src={logo} alt="Logo" /></div>
          {/* <div className="loader"></div> */}
        </div>
      }
      >
      <App />
      </Suspense>
    </FactoryContextProvider>
  </React.StrictMode>,
)
