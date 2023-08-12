import './App.css';
import Signin from './components/authentication/Signin';
import Signup from './components/authentication/Signup';

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
