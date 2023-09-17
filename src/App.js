import './App.css';
import Navbar1 from './components/Navbar1';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home';
import Products from './components/Products';
import { Route, Routes } from "react-router-dom"
import Product from './components/Product';

function App() {
  return (
    <>
     <Navbar1/>
     <Routes>
      <Route exact path='/' Component={Home} />
      <Route exact path='/products' Component={Products}/>
      <Route exact path='/products/:id' Component={Product}/>
     </Routes>
    </>
  );
}

export default App;
