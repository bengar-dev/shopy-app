import React from 'react'

export default function ModalAlert(props) {

    let msg = ''

    if(props.type === 1) {
        msg = 'Product out of stock'
    }
    else if(props.type === 2) {
        msg = 'Product add to your cart'
    } 
    else if (props.type === 3) {
      msg = 'Quantity update'
    }

    const classAlert = `text-white absolute z-20 -top-6 inset-x-1/2 left-50 w-max flex items-center justify-center p-2 text-xs rounded-lg ${props.type === 2 ? 'bg-red-400' : 'bg-emerald-400'}`

  return (
    
    <div className={classAlert}>

        <p>{msg}</p>

    </div>
    
  )
}
