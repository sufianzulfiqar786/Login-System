import logo from './logo.svg';
import './App.css';
import ResgisterPage from './Pages/ResgisterPage'
import LoginPage from './Pages/LoginPage';
import Home from './Pages/Home';
import Extra from './Pages/Extra';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
  <>
  
  


<BrowserRouter>

        <Routes>

          <Route path="/" element={<ResgisterPage/>} />
          <Route path="/loginpage" element={<LoginPage/>} />
          <Route path="/home" element={<Home/>} />
          
        </Routes>
        
      </BrowserRouter>


  
  </>
  );
}

export default App;
