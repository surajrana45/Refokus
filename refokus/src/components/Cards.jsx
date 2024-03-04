import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='w-full mt-20'>
        <div className='max-w-screen-xl mx-auto py-20 flex gap-2'>
            <Card width={"basis-1/3"}/>
            <Card width={"basis-2/3"}/>

        </div>
      
    </div>
  )
}

export default Cards
