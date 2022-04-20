import React from 'react'
import {Link} from 'react-router-dom'

import {data} from '../data/data'

export default function ProductsPrev() {
  return (
    <div className='relative p-6 pt-0 pb-0 w-full flex space-x-8 justify-around'>
      {data.slice(0, 5).map(item => 
        <article key={item.id} className='w-40 transition-all duration-200 hover:scale-125 hover:shadow-lg cursor-pointer'>
          <Link to={'/product/' + item.id}>
          <img src={item.imgUrl} className='w-40 h-40 object-cover'/>
          <h2 className='flex w-full justify-between p-2 font-medium text-sm'>{item.name} <span className='font-light'>$ {item.price}</span></h2></Link>
        </article>
      )}    
    </div>
  )
}
