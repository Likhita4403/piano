import './App.css';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About';
import Register from './components/Register';
import Help from './components/Help';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/Navbar' element={<Navbar />} />
        <Route path='/' element={<Login />} />        
        <Route path='/register' element={<Register />} />
      </Routes>
      {/* <Login/> */}
    </div>
  );
}

export default App;
