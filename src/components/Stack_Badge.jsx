import React from 'react'

function Stack_Badge({stack_title}) {
  return (
    <div className='border border-neutral-900 py-1 px-3 rounded cursor-pointer 
                    dark:border-neutral-50
                    hover:bg-neutral-900 hover:text-neutral-50 select-none'>
        <h5 className='text-sm'>{stack_title}</h5>
    </div>
  )
}

export default Stack_Badge