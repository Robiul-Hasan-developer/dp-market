import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './index.scss'
import MobileMenuProvider from './contextApi/MobileMenuContext.jsx'
import ScrollHideProvider from './contextApi/ScrollHideContext.jsx'
import FilterContextProvider from './contextApi/FilterContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
      <FilterContextProvider>
          <ScrollHideProvider>
              <MobileMenuProvider>
                <React.StrictMode>
                  <App />
                </React.StrictMode>
              </MobileMenuProvider>
          </ScrollHideProvider>
      </FilterContextProvider>
)
