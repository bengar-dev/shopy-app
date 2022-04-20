import React from 'react'

export default function Footer() {
  return (
    <footer className='relative text-zinc-900 text-sm bottom-0 h-20 w-full flex items-center justify-center space-x-2'>
        <i className='fas fa-igloo' />
        <span className='font-bold'>Shopy</span> <p className='font-medium'>(c) <a href='https://benoitgarcia.fr' className='transtion-all duration-200 text-zinc-800 hover:text-slate-800'>Benoit Garcia</a></p>
    </footer>
  )
}
