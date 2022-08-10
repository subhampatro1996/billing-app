import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { asyncDeleteProduct } from '../actions/ProductAction'
import AllProducts from './AllProducts'
import EditProduct from './EditProduct'

const ProductData = (props) => {
  const [toggle,setToggle] = useState(false)
  const [modalStatus, setModalStatus] = useState(false);
  const {_id,price,name} = props
  const dispatch = useDispatch()

  const hanldeProductRemove = ()=>{
        if(window.confirm("Are you sure")){
        dispatch(asyncDeleteProduct(_id))
        }
  }
  const handleToggle = ()=>{
    setToggle(!toggle)
    setModalStatus(!modalStatus)
  }
  console.log("productdata",modalStatus)
  return (
    <div>
        {
          toggle ? (
            <>
              <EditProduct
                id = {_id}
                price = {price}
                name = {name}
                handleToggle={handleToggle}
                modalStatus={modalStatus}
              />
              {/* <button onClick={handleToggle}>Cancel</button> */}
            </>
          ) : (
            <>
              {/* <b>Product Name - {name}</b>
              <br/>
              <b>Price - {price}</b>
              <br/>
              <button onClick={hanldeProductRemove}> Remove </button>
              <button onClick={handleToggle}> Edit </button> */}
              <AllProducts
                id={_id}
                price={price}
                name={name}
                handleToggle={handleToggle}
                hanldeProductRemove={hanldeProductRemove}
              />
            </>
          )
        }
        
    </div>
  )
}

export default ProductData