import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { PedidosYaApp } from './PedidosYaApp'
import { AppTheme } from './theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppTheme>
      <PedidosYaApp />
    </AppTheme>
  </React.StrictMode>
)
