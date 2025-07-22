import React from 'react'

function ContactLinks() {
  return (
    <div className='w-full flex items-center justify-center'>
      <div className='grid grid-cols-[auto_auto_auto] gap-4'>
        <nav className='rounded-lg '>
          <a href="https://www.linkedin.com/in/bryllemarius/" target='_blank' className='flex justify-center'>
            <img src="./src/assets/link_logo/linkedin.png" className='w-8' alt="" />
          </a>
        </nav>

        <nav className='rounded-lg'>
          <a href="https://github.com/ZF07e" target='_blank' className='flex justify-center'>
            <img src="./src/assets/link_logo/github.png" className='w-8' alt="" />
          </a>
        </nav>

        <nav className='rounded-lg '>
          <a href="mailto:bryllepastoral@gmail.com" target='_blank' className='flex justify-center'>
            <img src="./src/assets/link_logo/email.png" className='w-8' alt="" />
          </a>
        </nav>
      </div>
    </div>
  )
}

export default ContactLinks