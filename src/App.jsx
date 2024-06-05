import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'; 
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Logout from './pages/Logout';


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/register' element={ <Register /> } />
        <Route path='/dashboard' element={ <Dashboard /> } />
      </Routes>
    </>
  )
}

export default App
