import React, { useEffect, useState } from 'react'
import ProductItem from '../../components/productItem/ProductItem'
import Container from '../../components/container/Container'
import {Link} from 'react-router-dom'
import { getProducts } from '../../servers/api'
import {IProduct } from '../../type/servers'

function Store() {

  const [products,setProducts] =useState<IProduct[]>([])

 useEffect(() =>{
  getProducts().then((result) =>{
    setProducts(result);
  })
 },[]);

  return (
    <div>
      <Container>

      <h1 className='text-right mt-5'> New Products </h1>
     <div className='grid grid-cols-4 gap-4 mt-4'>
      { products.map((item) =>(
          <Link key={item.id} to={`/product/${item.id}`}>
      <ProductItem {...item}/>
      </Link>

        ))
      }
      
  
      
      
     </div>
      </Container>
   
    </div>
  )
}

export default Store
