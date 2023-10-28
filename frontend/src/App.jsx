import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'


//import all the components and add them to the router
import Username from './components/Username';
import Password from './components/Password';
import Register from './components/Register';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import Reset from './components/Reset';
import PageNotFound from './components/PageNotFound';
import Layout from './Layout';

// root route
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Username/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='password' element={<Password />} />
      <Route path='profile' element={<Profile />} />
      <Route path='recovery' element={<Recovery />}/>
      <Route path='reset' element={<Reset />} />
      <Route path='*' element={<PageNotFound />} />
    </Route>

  )
);


function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  )
}

export default App