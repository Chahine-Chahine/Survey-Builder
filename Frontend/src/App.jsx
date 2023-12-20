import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SigninPage from './pages/login';
import HomePage from './pages/HomePage/HomePage';
import Register from './pages/Register/index';
import AdminRegister from './pages/Admin/register';
import AdminPage from './pages/Admin';
function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<SigninPage/>}/>
    <Route path='/homepage' element= {<HomePage/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/adminRegister' element={<AdminRegister/>}/>
    <Route path='/admin' element={<AdminPage/>}/>
    </Routes>
    </BrowserRouter>
      
    
  );
}

export default App
