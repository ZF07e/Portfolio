import React from 'react'
import email from '../assets/contact/email.png'
import letter from '../assets/contact/letter.png'

function Contact() {
  return (
    <section id='Contact_section' className='w-full mb-12 md:mb-20 border-y dark:text-neutral-50 dark:border-none'>
      <div className='bg-[url(/src/assets/dot_grid.png)] dark:bg-[url()] bg-center bg-cover bg-no-repeat md:px-40'>      
        <div className='grid grid-rows-2 gap-20 w-full text-center md:grid-rows-1 md:grid-cols-2 md:gap-0 py-12 '>
          <div className='flex flex-col items-center justify-center order-1 md:order-0'>
            <img src={email} className='aspect-square' alt="" />
            <a href="mailto:bryllepastoral@gmail.com" target='_blank' className='py-4 px-8 rounded-full bg-neutral-200 dark:bg-neutral-900 font-medium mt-4'>Contact me</a >
            
          </div>
          <div className='flex flex-col items-center justify-center order-0 '>
            <img src={letter} className='aspect-square' alt="" />
            <a href="/Portfolio/resume/Marius Brylle Pastoral.pdf" target='_blank' className='py-4 px-8 rounded-full bg-neutral-200 dark:bg-neutral-900 font-medium mt-4'>My Resume</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact