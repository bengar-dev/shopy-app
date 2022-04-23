import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import {data} from '../data/data'

export default function UserInfo() {

    const [myCart, setMyCart] = useState([])

    const dispatch = useDispatch()
    const {cart, user} = useSelector(state => ({
        ...state.cartReducer,
        ...state.userReducer
    }))

    const getCart = JSON.parse(localStorage.getItem('cart'))

    const nbrItems = () => {
        let total = 0
        cart.forEach(el => {
            total += el.qty
        })
        return total
    }

    const totalCartPrice = () => {
        let total = 0
        if(myCart.length > 0) {
          myCart.forEach(el => {
            total += el.qty * el.object.price
          })
          return total
        }
      }

    useEffect(() => {
        dispatch({
            type: 'GETCART',
            payload: getCart
        })

             let array = []
            getCart.map(item => {
            data.forEach(el => {
                if(el.id === item.id) {
                let object = {
                    object: el,
                    qty: item.qty
                }
                array.push(object)
                } 
            }) 
            })
            setMyCart(array)
    },[])

    const handleInput = (e) => {
        dispatch({
            type: 'HANDLEUSER',
            payload: {
                id: e.target.id,
                value: e.target.value
            }
        })
    }

  return (

    <div className='w-9/12 p-2'>
        <h1 className='text-center text-2xl font-medium'>Confirm your informations</h1>
        <div className="mt-10 flex">
            <form className='mt-6 flex flex-col text-sm w-1/2'>
                <label htmlFor="firstname" className="p-2">Firstname</label>
                <input 
                value={user.firstname}
                onChange={(e) => handleInput(e)}
                type="text" id="firstname" placeholder="Firstname" className="border border-black p-2 outline-none"/>
                <label htmlFor="lastname" className="p-2">Lastname</label>
                <input 
                value={user.lastname}
                onChange={(e) => handleInput(e)}
                type="text" id="lastname" placeholder="Lastname" className="border border-black p-2 outline-none"/>
                <label htmlFor="birthdate" className="p-2">Birthdate</label>
                <input 
                value={user.birthdate}
                onChange={(e) => handleInput(e)}
                type="date" id="birthdate" className="border border-black p-2 outline-none"/>
                <label htmlFor="address" className="p-2">Address for shipping</label>
                <input 
                value={user.address}
                onChange={(e) => handleInput(e)}
                type="text" id="address" placeholder='Address' className="border border-black p-2 outline-none"/>
                <div className="mt-1 flex w-full space-x-2">
                    <input 
                    value={user.zipcode}
                    onChange={(e) => handleInput(e)}
                    type="text" id="zipcode" placeholder='Zipcode' className="w-1/3 border border-black p-2 outline-none"/> 
                <input 
                value={user.city}
                onChange={(e) => handleInput(e)}
                type="text" id="city" placeholder='City' className="w-2/3 border border-black p-2 outline-none"/> </div>     
                <label htmlFor="email" className="p-2">E-mail</label>
                <input 
                value={user.email}
                onChange={(e) => handleInput(e)}
                type="email" id="email" placeholder='E-mail' className="border border-black p-2 outline-none"/>   
                <label htmlFor="phone" className="p-2">Phone number</label>
                <input 
                value={user.phone}
                onChange={(e) => handleInput(e)}
                type="text" id="phone" placeholder='+33...' className="border border-black p-2 outline-none"/>     
            </form>
            <div className="w-1/2 m-10 h-max p-4 border flex flex-col items-center">
                <Link to='/payment' className="transition-all text-sm border border-yellow-500 text-yellow-900 bg-yellow-400 p-2 hover:shadow-lg">Confirm your order & pay</Link>
                <p className="mt-4 p-2 text-xs">By placing your order, you agree to Shopy's Terms and Conditions. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Advertising Notice.</p>
                <h2 className='mt-6 w-full font-medium'>Your order resume</h2>
                <div className='mt-4 w-full flex flex-col space-y-2 text-sm'>
                    <p>Articles : <span className="ml-10 font-medium">{nbrItems()}</span></p>
                    <p className='font-medium text-red-600'>Total : <span className="text-lg">${totalCartPrice()}</span></p>
                </div>
            </div>
        </div>
    </div>

  )
}
