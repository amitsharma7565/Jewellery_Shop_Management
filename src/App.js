import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Signup' element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
