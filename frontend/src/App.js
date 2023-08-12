import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from './components/authentication/Signin';
import Signup from './components/authentication/Signup';
import Home from './pages/Home/Home'

function App() {
  return (
    <>
    
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          
        </Routes>
        
      </BrowserRouter>
     
     </>
  );
}

export default App;
