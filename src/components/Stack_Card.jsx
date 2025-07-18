import React from 'react'

function Stack_Card({src, stack_name}) {
  return (
    <div className='w-full h-full flex justify-center items-center opacity-0 animate-(--animate-slide_up) transform'>
      <div className='text-center grid grid-rows-2'>
        <div className='flex justify-center w-25'>
          <img src={`./src/assets/stacks/${src}`} className='aspect-square w-14' alt="" />
        </div> 
        <h4 className='mt-2 font-medium'>{stack_name}</h4>
      </div>
    </div>
  )
}

export default Stack_Card