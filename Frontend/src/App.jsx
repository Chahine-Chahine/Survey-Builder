import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SigninPage from './pages/login';
import HomePage from './pages/HomePage/HomePage';
function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<SigninPage/>}/>
    <Route path='/homepage' element= {<HomePage/>}/>
    </Routes>
    </BrowserRouter>
      
    
  );
}

export default App
