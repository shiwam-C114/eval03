
import './App.css';
import { Routes,Route } from 'react-router';
import Home from './component/Home';
import Products from './component/Products';
import Login from './component/Login';
import Register from './component/Register';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
     
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
