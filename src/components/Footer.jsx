import React from 'react'
import ContactLinks from './ContactLinks.jsx';

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  const copyright_format = `© ${year} Brylle's Portfolio. All Rights Reserved.`;


  return (
    <footer className='h-50 w-full bg-neutral-200 dark:bg-neutral-950 py-4 px-8 border-t-1 border-neutral-400 text-center dark:text-neutral-100'>
      <div className='w-full h-full flex flex-col items-center justify-center'>
        <ContactLinks />
        <p className='mt-2'>{copyright_format}</p>
      </div>
    </footer>
  )
}

export default Footer