import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Test from './pages/Test.tsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { AlertProvider } from './context/AlertContext.tsx'
import { NotFoundPage, UserOrders, AdminLayout, Dashboard, EditMenu, Orders } from './pages'
import { ModalProvider } from './context/ModalContext.tsx'
import { CartProvider } from './context/CartContext.tsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" >
      <Route path="admin/" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="edit-menu" element={<EditMenu />} />
        <Route path="orders" element={<Orders />} />
      </Route>
      <Route path="" element={<App />}>
         <Route path="/:categoryId" />
      </Route>
      <Route path="orders" element={<UserOrders />} />
      <Route path="test" element={<Test />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
)

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AlertProvider>
      <ModalProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </ModalProvider>
    </AlertProvider>
  </React.StrictMode>,
)
