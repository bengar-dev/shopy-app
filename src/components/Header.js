import React, { Component, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'

export default function Header() {

    const dispatch = useDispatch()
    const {cart} = useSelector(state => ({
        ...state.cartReducer
    }))

    const getCart = JSON.parse(localStorage.getItem('cart'))

    const nbrItems = () => {
        let total = 0
        cart.forEach(el => {
            total += el.qty
        })
        return total
    }

    useEffect(() => {
        dispatch({
            type: 'GETCART',
            payload: getCart
        })
    },[])

    const handleToggle = () => {
        const nav = document.querySelector('nav').classList
        if(nav.contains('hidden')) {
            nav.add('block')
            nav.remove('hidden')
        } else {
            nav.add('hidden')
            nav.remove('block')
        }
    }

  return (
    <header className='flex w-full justify-around items-center h-24 text-zinc-800'>
        <div className='relative w-1/4 md:w-max flex justify-center'>
            <i 
            className="fas fa-igloo text-zinc-900 text-4xl"></i>
        </div>
        <nav className="absolute z-20 bg-white hidden md:block top-24 md:relative md:top-0 md:w-fit lg:block">
        <ul className='flex space-x-6 font-medium tracking-widest'>
            <li><Link to='/' className='transition-all duration-200 hover:text-rose-400'>Home</Link></li>
            <li><Link to='/products' className='transition-all duration-200 hover:text-rose-400'>Products</Link></li>
            <li><a href='#' className='transition-all duration-200 hover:text-rose-400'>Offers</a></li>
            <li><a href='#' className='transition-all duration-200 hover:text-rose-400'>Contact</a></li>
        </ul>
        </nav>
        <div className='flex w-2/4 md:w-max items-center justify-end md:space-x-2'>
            <Link to='/cart'><i className="fas fa-shopping-cart text-rose-400 text-2xl mr-6"></i></Link>
            <button 
            onClick={(e) => e.preventDefault(handleToggle())}
            className="block text-3xl md:hidden mr-2 ">
                <i className="fas fa-bars" />
            </button>
            <Link to='/cart' className='hidden md:block transition-all duration-200 font-medium hover:text-rose-400'>Cart ({nbrItems()})</Link>
        </div>
    </header>
  )
}
