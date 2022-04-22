import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import ModalAlert from '../components/ModalAlert'
import {data} from '../data/data'

export default function Cart() {

  const getCart = JSON.parse(localStorage.getItem('cart'))
  const [myCart, setMyCart] = useState([])
  const [alert, setAlert] = useState(false)
  const [typeAlert, setTypeAlert] = useState(0)

  useEffect(() => {
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
  }, [])

  const handleChange = (e, id) => {
    let array = [...myCart]
    let findIndex = array.findIndex(p => p.object.id === id)
    array[findIndex].qty = e.target.value
    setMyCart(array)
  }

  const handleSubmit = (qty, id) => {
    let arrayCart = [...getCart]
    let findProduct = arrayCart.findIndex(p => p.id === id)
    if(findProduct !== -1) {
      arrayCart[findProduct].qty = parseInt(qty)
      localStorage.setItem('cart', JSON.stringify(arrayCart))
      setAlert(true)
      setTypeAlert(3)
      setTimeout(() => {          
         setAlert(false)           
       }, 3000)                   
    }
  }

  const handleDelete = (id) => {
    let arrayCart = getCart.filter(p => p.id !== id)
    localStorage.setItem('cart', JSON.stringify(arrayCart))
    let array = [...myCart]
    let filterArray = array.filter(p => p.object.id !== id)
    setMyCart(filterArray)
  }

  return (
    <div className='relative w-9/12'>
      {alert ? <ModalAlert 
                type={typeAlert}/> : ''}
    {myCart.length > 0 ? 

    myCart.map(item => 
      
    <div className="w-full flex p-2" key={item.object.id}>
      
      <div className='w-1/4 h-50'>
        <img src={item.object.imgUrl} className='h-50 w-60 object-cover '/>
      </div>
      <div className='w-3/4 p-2 flex flex-col justify-between'>
        <h1 className='text-2xl font-medium'>{item.object.name}</h1>
        <p className='text-sm flex flex-col'>price / unity <span className="text-xl font-medium text-red-400">$ {item.object.price}</span></p>
        <div className="relative flex items-center space-x-4">
          <label htmlFor="qty" className="text-sm">Qty</label>
          <input
          value={item.qty}
          onChange={(e) => handleChange(e, item.object.id)}
          id="qty" type="number" min="1" max="10" className="bg-zinc-200 text-sm p-1 outline-none"/>
          <button
          onClick={(e) => e.preventDefault(handleSubmit(item.qty, item.object.id))}
          className="transition-all duration-200 p-1 bg-emerald-400 hover:bg-emerald-500 text-emerald-800 text-sm"
          >Confirm</button>
          <p className='text-sm'><span className='font-medium'>$ {item.qty * item.object.price}</span></p>
          <button 
          onClick={(e) => e.preventDefault(handleDelete(item.object.id))}
          className="transition-all duration-200 absolute right-0 bg-red-400 p-1 text-sm text-red-800 font-medium hover:bg-red-300">Delete</button>
        </div>
      </div>
    </div>
   
    )
    
    : <p className='text-center p-4 text-sm'>There is no item in your cart... check our <Link className='font-medium text-lg text-red-400 hover:text-red-300' to='/products'>Products</Link></p> }
    </div>
  )
}
