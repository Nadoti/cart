import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ProductContextProvider } from './context/ProductContext'

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ProductContextProvider>
        <RouterProvider router={router} />
      </ProductContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
