import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import { Loginpage } from './pages/login.page'
import { Landingpage } from './pages/landing/landing.page'
import { Packages } from './pages/landing/packages'
import { Detail } from './pages/landing/blogs/detail'
import {Add } from './pages/landing/add.blogs'

function App() {
  

  return (
    
    <Router>
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/login' element={<Loginpage/>}/>
        <Route path='/packages' element={<Packages/>}/>
      <Route path='/details/:id' element={<Detail/>}/>
      <Route path='/addblog' element={<Add/>}/>
      
    </Routes>
     </Router>
    
  )
}

export default App
