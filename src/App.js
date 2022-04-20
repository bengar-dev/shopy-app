import { Routes, Route, Link } from "react-router-dom";

import Home from './containers/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Products from './containers/Products'
import ProductDetails from "./containers/ProductDetails";

function App() {
  return (
    <>
    <Header />
      <div className='flex flex-col items-center'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/product/:id' element={<ProductDetails />} />
      </Routes>
      </div>
    <Footer />  
    </>
  );
}

export default App;
