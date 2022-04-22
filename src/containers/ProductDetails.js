import React, { Component, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import ModalAlert from '../components/ModalAlert'

import {data} from '../data/data'

export default function ProductDetails() {

    const {cart} = useSelector(state => ({
        ...state.cartReducer
    }))

    const [alert, setAlert] = useState(false)
    const [typeAlert, setTypeAlert] = useState(0)
    const [qty, setQty] = useState(0)

    const dispatch = useDispatch()
    const params = useParams()
    const id = params.id

    const increaseQty = (e) => {
        e.preventDefault()
        let nbr = qty + 1
        if(nbr >= 10) {
            nbr = 10
        }
        setQty(nbr)
    }

    const decreaseQty = (e) => {
        e.preventDefault()
        let nbr = qty - 1
        if(nbr <= 0) {
            nbr = 0
        }
        setQty(nbr)
    }

    const handleAddCart = (id) => {

        let itemCart = {
            id,
            qty
        }

        if(qty > 0 && qty <= 10) {
            const item = data.find(p => p.id === id)
            if(item.inStock) {
                setAlert(true)
                setTypeAlert(2)
                setTimeout(() => {
                    setAlert(false)
                }, 3000)
                dispatch({
                    type: 'ADDCART',
                    payload: itemCart
                })
            } else {
                setAlert(true)
                setTypeAlert(1)
                setTimeout(() => {
                    setAlert(false)
                }, 3000)
            }
        }
    }

  return (
    <div className='relative p-6 w-9/12'>

    {alert ? <ModalAlert 
                type={typeAlert}/> : ''}

          {data.map(item => 
            item.id == params.id &&
            
            <div key={item.id} className='w-full flex'>
                <div className='p-1 w-1/2'>
                    <img src={item.imgUrl} />
                </div>
                <div className='p-2 pl-4 w-1/2 flex flex-col'>
                    <h1 className='text-2xl font-medium'>{item.name}</h1>
                    <span className='font-light text-zinc-800'>$ {item.price}</span>
                    <p className='mt-10 text-sm'>Availability : {item.inStock ? <span className='font-medium text-emerald-400'>In stock</span> : <span className='font-medium text-red-400'>Out of stock</span>}</p>
                    <p className='mt-10 text-sm text-slate-800'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Phasellus id nisi quis justo tempus mollis sed et dui. In hac habitasse platea dictumst. Suspendisse ultrices mauris diam. Nullam sed aliquet elit. Mauris consequat nisi ut mauris efficitur lacinia.</p>
                    <div className='flex relative w-full mt-10'>
                        <input value={qty} type='number' min='0' max='10' className='p-4 border-2 outline-none border-zinc-400 text-center qtyInput'/>
                        <div className='flex flex-col h-full'>
                            <button 
                            onClick={(e) => increaseQty(e)}
                            className='h-1/2 w-10 bg-zinc-400 flex items-center justify-center font-bold text-zinc-900 hover:bg-zinc-300 hover:text-zinc-800'>+</button>
                            <button 
                            onClick={(e) => decreaseQty(e)} 
                            className='h-1/2 w-10 bg-zinc-400 flex items-center justify-center font-bold text-zinc-900 hover:bg-zinc-300 hover:text-zinc-800'>-</button>
                        </div>
                        <button
                        onClick={(e) => e.preventDefault(handleAddCart(item.id))}
                        className='transition-all duration-200 ml-4 border-2 border-zinc-900 w-60 font-bold text-zinc-900 hover:bg-zinc-900 hover:text-white'
                        type='button'>Add to cart</button>
                    </div>
                    <hr className='mt-10' />
                    <div className='p-6 text-sm text-zinc-600 flex items-center'>
                        <span className='text-xs'>Share :</span>
                        <div className='ml-10 flex space-x-10'>
                            <i className='fab fa-twitter hover:text-sky-600 cursor-pointer' />
                            <i className='fab fa-instagram hover:text-rose-600 cursor-pointer' />
                            <i className='fab fa-facebook hover:text-blue-600 cursor-pointer' />
                            <i className='fab fa-github hover:text-stone-500 cursor-pointer' />
                        </div>
                    </div>
                </div>
            </div>

            )}   
        
    </div>
  )
}
