import React from 'react'

function Stripe({url,number}) {
  
  return (
    <div className='w-[16.66%] px-4 py-4 border-t-2 border-b-2 border-r-2 border-zinc-700 flex justify-between items-center text-white'>
      <img src={url}/>
      <span className='font-semibold'>{number}</span>
    </div>
  )
}

export default Stripe
