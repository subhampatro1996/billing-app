import React from 'react'

const AllProducts = (props) => {
    const {id,name,price,handleToggle,hanldeProductRemove} = props

  return (
    <div className="flex-container">
    <div className="flex-box">
    <h5 className="p-2">{name}</h5>
    <h5 className="p-2">{price}</h5>
    <button className="btn btn-primary m-2"  onClick={hanldeProductRemove}>Delete</button>
    <button className="btn btn-primary m-2"  onClick={handleToggle}>Edit</button>
    </div>
    </div>
  )
}

export default AllProducts