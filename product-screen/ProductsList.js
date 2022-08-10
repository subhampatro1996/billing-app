import React from 'react'
import { useSelector } from 'react-redux'
import ProductData from './ProductData'

const ProductsList = () => {
    const product = useSelector((state)=>{
        return state.product
    })
    console.log(product)
  return (
    <div>
        <h1 className="text-center">Product List - {product.length}</h1>
        <div className="flex-container jsutify-content-center">
        {
            product.map((ele)=>{
                return (
                    <ProductData key={ele._id} {...ele}/>
                )
            })
        }
        </div>
    </div>
  )
}

export default ProductsList