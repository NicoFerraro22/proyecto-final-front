import { AuthProvider } from './contexts/AuthContext'
import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* React Query Provider */}
    <QueryClientProvider client={new QueryClient()}>
      <AuthProvider><App /></AuthProvider>
    </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
)