import {Routes , Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Store from './pages/store/Store'

import Layout from './components/layout/Layout'
import Product from './pages/product/Product'
import Cart from './pages/cart/Cart'
import {  ShoppingCartProvider } from './context/ShoppingCartContext'
import { useState } from 'react'


function App() {

const [cartItems, setCartItems] = useState([])
  return (

  //  <ShoppingCartContext.Provider value={{cartItems}}>  ShoppingCartContext یک provider  ساختیم به جای این دیگه در 
   <ShoppingCartProvider>


<Layout>
    <Routes>
      <Route path = "/" element={<Home />} />
      <Route path = "/store" element={<Store />} />
      <Route path = "/product/:id" element={<Product />} />
      <Route path = "/cart" element={<Cart />} />

    </Routes>

    </Layout>
    </ShoppingCartProvider>
  //  </ShoppingCartContext.Provider>
  
    
   
    

  )
}

export default App
