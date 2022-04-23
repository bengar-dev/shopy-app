import React from 'react'
import {Link} from 'react-router-dom'

import bgCat from '../assets/bg_cat.webp'
import {data} from '../data/data'

export default function Products() {
  return (
    <div className='relative p-6 w-full lg:w-9/12'>
      <div className='w-full'>
        <img src={bgCat} className='transition-all duration-500 w-full h-80 object-cover' alt='Background image'/>
      </div>
      <div className='relative md:text-white md:absolute md:top-40 md:left-40 w-full md:w-1/3'>
        <h1 className='font-bold text-4xl p-2 md:p-0'>Smart Phones<span className='text-rose-400'>.</span></h1>
        <p className='text-sm font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus</p>
      </div>
      <div className='mt-6 relative w-full flex flex-wrap'>
        {data.map(item => 
          
          <article key={item.id} className='mb-10 p-1 w-full md:w-1/3'>
            <div className='overflow-hidden'>
              <img src={item.imgUrl} className='transition-all duration-500 w-full object-cover h-32 md:h-60 hover:scale-125' alt={item.name}/>
            </div>
            <div className='mt-6'>
              <h2 className='transition-all duration-200 font-medium hover:text-rose-400 cursor-pointer'><Link to={'/product/' + item.id}>{item.name}</Link></h2>
              <span className='text-zinc-800 font-light'>$ {item.price}</span>
            </div>
          </article>

          )}
      </div>
    </div>
  )
}
