import React, { useContext } from 'react'
import Container from '../../components/container/Container'
import CartItem from '../../components/cartItem/CartItem'
import Button from '../../components/button/Button'
import { ShoppingCartContext } from '../../context/ShoppingCartContext'


function Cart() {

  const {cartItems} =useContext(ShoppingCartContext);
  return (
    <div>
      <Container>
        <div className=''>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
        </div>
        <div className='bg-gray-200 rounded p-6'>
            <p>total price :200$</p>
            <p>reduce price :20$</p>
            <p>Finish price :180$</p>
        </div >
        <div className='mr-4 text-right'>
        <Button className='mt-2  ' variant='success'>
            order
        </Button>
        </div>
       
      </Container>
    </div>
  )
}

export default Cart
