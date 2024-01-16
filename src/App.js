
import './App.css';
import Navigation from './Component/Navigation/Navigation';
import Home from './Component/Home-carosel/Home';
import Homepage from './Component/Page/Home-page/Homepage';
import Footer from '../src/Component/Footer/Footer'
import Product from './Component/Product/Product';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetails from './Component/ProductDetail/ProductDetails';
import About from './Component/Footer-data/About';
import Blog from './Component/Footer-data/Blog';
function App() {
  return (
<>


<Navigation/>
<Routes>
  <Route path='/' Component={Homepage}></Route>
  
  <Route path='/about' Component={About}></Route>
  <Route path='/product' Component={Product}></Route>
  <Route path='/productdetails' Component={ProductDetails}></Route>
  <Route path='/blog' Component={Blog}></Route>
  </Routes>
  <Footer/>

{/* <Routes>
  
</Routes>
<Routes>
 
</Routes>
<Routes>

</Routes> */}


</>
    
  );
}

export default App;
