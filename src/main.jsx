import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import AppRouter from './AllRoutes/Route.jsx';
import AuthProvider from './ContextProviders/AuthProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='max-w-7xl mx-auto'>
   <React.StrictMode>
    <AuthProvider>
    <RouterProvider router = {AppRouter}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
 </div>
)
