import React from 'react'
import ProductForm from './ProductForm'
const EditProduct = (props) => {
    const {id,price,name,handleToggle,modalStatus} = props
  return (
    <div>
        <ProductForm
            id={id}
            name={name}
            price={price}
            handleToggle={handleToggle}
            modalStatus={modalStatus}
        />
    </div>
  )
}

export default EditProduct