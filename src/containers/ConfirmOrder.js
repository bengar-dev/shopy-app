import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

export default function ConfirmOrder() {

    const navigate = useNavigate()
    const params = useParams()

    setTimeout(() => {
        navigate('/products')
        window.location.reload(false)
    }, 10000)

    const backHome = () => {
        navigate('/products')
        window.location.reload(false)
    }

  return (
    <div className='mt-10 md:mt-0 w-9/12 flex flex-col items-center'>

    <h1 className='text-center text-2xl font-medium'>Thanks you for your order !</h1>

    <div className='relative mt-10 w-full md:w-1/2 flex flex-col border p-2 text-sm'>
        <p className="font-medium">Thanks for your trust !</p>
        <p className='p-2'>Your order is now in preparation, you can follow it with your ID Order : <span className="font-medium text-red-600">{params.id}</span></p>
        <p className="mt-10 font-medium">Shopy CEO <span className="font-light">Benoit Garcia</span></p>
        <button 
        onClick={(e) => e.preventDefault(backHome())}
        className="absolute bottom-2 right-2 bg-slate-400 p-1 text-xs text-slate-900">Back to the shop</button>
    </div>
        
    </div>
  )
}
