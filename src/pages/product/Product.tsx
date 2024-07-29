import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from '../../components/container/Container'
import Button from '../../components/button/Button'
import { getProduct } from '../../servers/api'
import { IProduct} from '../../type/servers'

function Product() {

    const params =useParams <{id:string}>();
    const [product,setProduct] =useState<IProduct>()

    useEffect(() =>{
      getProduct(params.id as string).then((result) =>{
        setProduct(result)

      });

    },[]);

  return (
    <div>
        <Container>
            <div className='h-96 shadow mt-4 grid grid-cols-12'>
            <div className='col-span-2 p-4 bg-sky-200'>
                  <img  
                   className='rounded'
                  src={product?.image}
                  alt=""
                  />
                  <div>
                  <Button  className='mt-2 w-full !py-3' variant='primary'> Add to cart </Button>
              
                  </div>

                </div>
               <div className=' col-span-10 p-4'>
                 <h1 className='text-left'>{product?.title}</h1>    {/* className='text-right'  برای این که فارسی باشه میذارم */}
                 <div>
                   <p className='text-left'>Price : {product?.price}$</p>    {/* className='text-right'  برای این که فارسی باشه میذارم */}
            <p className='text-left'>            {/* className='text-right'  برای این که فارسی باشه میذارم */}
                    {product?.description}
                    </p> 
           
                </div>
               </div>
          
             
             
            </div>
          

        </Container>
     
    </div>
  )
}

export default Product
