import React from 'react'

function Stack_Card({src}) {
  return (
    <div className='w-full h-full flex px-12 pt-8'>
      <div className=''>
        <img src={`./src/assets/stacks/${src}`} className='w-16 mx-auto' alt="" />
        <h4>Lorem Ipsum</h4>
      </div>
    </div>
  )
}

export default Stack_Card