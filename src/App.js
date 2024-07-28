import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import Dashboard from './Components/Dashboard';
import Vendor from './Components/Vendor';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Signup' element={<SignUp />} />
        <Route path="/Signin" element={<SignIn/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/vendor" element={<Vendor/>}/>
      </Routes>
    </Router>
  );
}

export default App;
