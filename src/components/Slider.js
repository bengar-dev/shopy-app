import React from 'react'
import {Link} from 'react-router-dom'

import slider from '../assets/slider_1.webp'

export default function Slider() {
  return (
    <div className='relative p-6'>
        <img src={slider} className="hidden md:block"/>
        <div className='lg:w-1/3 relative lg:absolute lg:-mt-20 inset-y-1/2 lg:left-20'>
          <h1 className='w-1/3 lg:w-full font-bold text-5xl lg:text-white'>A new Online Shop experience.</h1>
          <p className='mt-2 font-light lg:text-white text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus.</p>
          <button className='transition-all w-full lg:w-max duration-500 mt-4 p-4 pl-8 pr-8 text-sm font-medium border-2 border-black lg:border-white lg:text-white hover:bg-black lg:hover:bg-white hover:text-black'><Link to='/products'>Shop Now</Link></button>
        </div>
    </div>
  )
}
