import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'

export default function Payment() {

    const dispatch = useDispatch()
    const {cart, user} = useSelector(state => ({
        ...state.cartReducer,
        ...state.userReducer
    }))

    const navigate = useNavigate()
    const [credit, setCredit] = useState({
        ccOwner: '',
        ccNumber : '',
        ccCrypto : '',
        ccExp : ''
    })
    console.log(user)
    if(!user.firstname) {
        navigate('/')
    }

    const handleDigit = (e) => {
        return /^-?\d+\.?\d*$/g.test(e)
    }

    const handleInput = (e) => {
        if(e.target.id === 'cc-number') {
            setCredit({
                ...credit,
                ccNumber : e.target.value
            })
            if(!handleDigit(e.target.value)) {
                document.querySelector('#cc-number').classList.add('border-red-600')
            } else {
                document.querySelector('#cc-number').classList.remove('border-red-600')
            }
        } else if(e.target.id === 'cc-crypto') {
            setCredit({
                ...credit,
                ccCrypto: e.target.value
            })
            if(!handleDigit(e.target.value)) {
                document.querySelector('#cc-crypto').classList.add('border-red-600')
            } else {
                document.querySelector('#cc-crypto').classList.remove('border-red-600')
            }
        }
        else if(e.target.id === 'cc-exp') {
            setCredit({
                ...credit,
                ccExp: e.target.value
            })
        }
        else if(e.target.id === 'cc-owner') {
            setCredit({
                ...credit,
                ccOwner: e.target.value
            })
        }
    }

    const handleSubmit = () => {
        if(credit.ccOwner && credit.ccNumber && credit.ccExp && credit.ccCrypto) {
            let cart = []
            navigate('/confirm-order/' + uuidv4())
            localStorage.setItem('cart', JSON.stringify(cart))
        } else {
            console.log('erreur')
        }
    }


  return (
    <div className='w-9/12 flex flex-col items-center'>

    <h1 className='text-center text-2xl font-medium'>Payment by credit card</h1>

    <form className='text-sm p-4 w-1/2 mt-10 border flex flex-col space-y-2'>
        <label htmlFor="cc-number" className='flex items-center'><i className='far fa-credit-card mr-4' />Credit card</label>
        <input type="text" 
        value={credit.ccOwner}
        onChange={(e) => handleInput(e)}
        id='cc-owner' placeholder="Credit card holder" className="border border-black p-1 outline-none"/>
        <input
        value={credit.ccNumber} 
        onChange={(e) => handleInput(e)}
        type="text" id="cc-number" placeholder="0000 0000 0000 0000" className="border border-black p-1 outline-none"/>
        <div className="flex space-x-4">
            <input 
            value={credit.ccCrypto} 
            onChange={(e) => handleInput(e)}
            type="text" id="cc-crypto" placeholder="1234" className="border border-black p-1 w-1/6 outline-none"/>
            <input 
            value={credit.ccExp} 
            onChange={(e) => handleInput(e)}
            type="text" id="cc-exp" placeholder="02/22" className="border border-black p-1 w-1/6 outline-none"/>
        </div>
        <button
        onClick={(e) => e.preventDefault(handleSubmit())}
        className="transition-all bg-yellow-400 border border-yellow-500 text-yellow-900 hover:shadow-lg p-2"
        >Confirm my order</button>
    </form>

    </div>
  )
}
