import React from 'react'
import { useParams } from 'react-router-dom'
import Container from '../../components/container/Container'
import Button from '../../components/button/Button'

function Product() {

    const params =useParams()

  return (
    <div>
        <Container>
            <div className='h-96 shadow mt-4 grid grid-cols-12'>
            <div className='col-span-2 p-4 bg-sky-200'>
                  <img  
                   className='rounded'
                  src='data:image/jpeg;base64,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' 
                  alt=""
                  />
                  <div>
                  <Button  className='mt-2 w-full !py-3' variant='primary'> Add to cart </Button>
              
                  </div>

                </div>
               <div className=' col-span-10 p-4'>
                 <h1 className='text-left'>Title Product</h1>    {/* className='text-right'  برای این که فارسی باشه میذارم */}
                 <div>
                   <p className='text-left'>Price : 25$</p>    {/* className='text-right'  برای این که فارسی باشه میذارم */}
            <p className='text-left'>            {/* className='text-right'  برای این که فارسی باشه میذارم */}
                       someting about products as description  someting about products as description  someting about products as description 
                       someting about products as description  someting about products as description  someting about products as description 
                       someting about products as description  someting about products as description  someting about products as description 

                    </p> 
           
                </div>
               </div>
          
             
             
            </div>
          

        </Container>
     
    </div>
  )
}

export default Product
