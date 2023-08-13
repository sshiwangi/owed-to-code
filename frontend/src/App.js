import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from './components/authentication/Signin';
import Signup from './components/authentication/Signup';
import Home from './pages/Home/Home'
import Task from './pages/Task/Task';

function App() {
  return (
    <>
    
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/task" element={<Task />} />
          
        </Routes>
        
      </BrowserRouter>
     
     
     </>
  );
}

export default App;
