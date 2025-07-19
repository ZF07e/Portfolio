import React from 'react'

function Stack_Badge({stack_title}) {
  return (
    <div className='border border-neutral-900 px-2 rounded cursor-pointer hover:bg-neutral-900 hover:text-neutral-50 select-none'>
        <h5 className='text-sm'>{stack_title}</h5>
    </div>
  )
}

export default Stack_Badge