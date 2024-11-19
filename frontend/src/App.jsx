import './App.css';
import Browse from './components/Browse';
import Home from './components/Home';
import JobDescription from './components/JobDescription';
import Jobs from './components/Jobs';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Profile from "./components/profile";

import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const appRouter = createBrowserRouter([
  {
    path:'/',
    element: <Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:'/jobs',
    element:<Jobs/>
  },
  {
    path:'/description/:id',
    element:<JobDescription/>
  },
  {
    path:'/browse',
    element:<Browse/>
  },
  {
    path:'/profile',
    element:<Profile/>
  },

])

function App() {

  return (
<div>
    
  <RouterProvider router = {appRouter}/>
 </div>
    
  )
}

export default App
