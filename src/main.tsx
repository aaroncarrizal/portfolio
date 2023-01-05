import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./routes/Home";
import Navbar from './components/Navbar';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <h1>Error</h1>
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Navbar/>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
