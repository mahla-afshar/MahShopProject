import React from 'react'
import { IProduct } from '../../type/servers'

type TProductItem = IProduct

function ProductItem({title,price,description,image}: TProductItem ) {
  return (
    <div className='shadow border rounded pb-2'>
      <img className='rounded-t' src={image} alt=""/>
      <div className='flex justify-between  px-4 mt-2'>
        <h3 className='line-clamp-1 font-bold w-65'>{title}</h3>
        <span className='font-bold'>{price}$</span>
      </div>
      <div className='px-4 mt-2'>
        <p className='line-clamp-2 text-left text-gray-500'>    {/*text-right  برای فارسی نوشتن میشه تکست الاین رو راستچین کرد  */}

       {description}
        </p>

      </div>
    </div>
  )
}

export default ProductItem
