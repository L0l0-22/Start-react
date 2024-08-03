
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import { Home } from './components/Home/Home'
import { About } from './components/About/About2'
import { Contact } from './components/Contact/Contact'
import NotFound from './components/NotFound/NotFound'
import Portfolio from './components/Portfolio/Portfolio'
function App() {
  let router = createBrowserRouter([
    { path:'', element: <Layout/> , children:[
      { index: true , element: <Home/> },
      { path: 'portfolio' , element: <Portfolio/> },
      { path: 'about', element: <About/> },
      { path: 'contact', element: <Contact/> },
      { path: '*' , element: <NotFound/>}
    ] }
  ])
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      </>
  )
}

export default App
