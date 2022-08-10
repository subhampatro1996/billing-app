import React from 'react'
import CustomerForm from './CustomerForm'

const EditCustomer = (props) => {
    const {id,name,mobile,handleToggle,email,modalStatus} = props
    // console.log(id)
  return (
    <div>
        {/* <h4>Edit Customer</h4> */}
        <CustomerForm
            id={id}
            name={name}
            mobile={mobile}
            handleToggle={handleToggle}
            email={email}
            modalStatus={modalStatus}
        />
    </div>
  )
}

export default EditCustomer