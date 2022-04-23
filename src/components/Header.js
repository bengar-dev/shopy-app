import React, { useEffect } from 'react'
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

  return (
    <header className='flex w-full justify-around items-center h-24 text-zinc-800'>
        <div className='relative flex justify-center'>
            <i className="fas fa-igloo text-zinc-900 text-4xl"></i>
        </div>
        <nav>
            <ul className='flex space-x-6 font-medium tracking-widest'>
                <li><Link to='/' className='transition-all duration-200 hover:text-rose-400'>Home</Link></li>
                <li><Link to='/products' className='transition-all duration-200 hover:text-rose-400'>Products</Link></li>
                <li><a href='#' className='transition-all duration-200 hover:text-rose-400'>Offers</a></li>
                <li><a href='#' className='transition-all duration-200 hover:text-rose-400'>Contact</a></li>
            </ul>
        </nav>
        <div className='flex items-center space-x-2'>
            <i className="fas fa-shopping-cart text-rose-400"></i>
            <Link to='/cart' className='transition-all duration-200 font-medium hover:text-rose-400'>Cart ({nbrItems()})</Link>
        </div>
    </header>
  )
}
