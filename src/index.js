import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles/index.scss'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ErrorBoundary } from './components/ErrorBoundary'
const queryClient = new QueryClient()
ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root'),
)
