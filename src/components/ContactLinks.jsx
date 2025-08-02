import React from 'react'

function ContactLinks() {
  return (
    <div className='flex'>
      <div className='grid grid-cols-[auto_auto_auto] gap-2'>
        <nav className='rounded-lg '>
          <a href="https://www.linkedin.com/in/bryllemarius/" target='_blank' 
             className='flex justify-center w-8 aspect-square bg-[url(/src/assets/link_logo/linkedin.png)] dark:bg-[url(/src/assets/link_logo/linkedin_light.png)] bg-center bg-cover bg-no-repeat'>
          </a>
        </nav>

        <nav className='rounded-lg'>
          <a href="https://github.com/ZF07e" target='_blank' 
             className='flex justify-center w-8 aspect-square bg-[url(/src/assets/link_logo/github.png)] dark:bg-[url(/src/assets/link_logo/github_light.png)] bg-center bg-cover bg-no-repeat'>
          </a>
        </nav>

        <nav className='rounded-lg '>
          <a href="mailto:bryllepastoral@gmail.com" target='_blank' 
             className='flex justify-center w-8 aspect-square bg-[url(/src/assets/link_logo/email.png)] dark:bg-[url(/src/assets/link_logo/email_light.png)] bg-center bg-cover bg-no-repeat'>
          </a>
        </nav>
      </div>
    </div>
  )
}

export default ContactLinks