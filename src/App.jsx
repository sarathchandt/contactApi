import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import './App.css'
import Register from './pages/Register';
import View from './pages/View';
import Edit from './pages/Edit';
import ProtectedRoutes from './pages/ProtectedRoutes';

function App() {
  

  return (
    <>
    <Router>

      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route path='/register' element={<Register/>} />
        <Route element={<ProtectedRoutes/>} >
        <Route path='/view' element={<View/>} />
        <Route path='/edit' element={<Edit/>} />
        </Route>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
