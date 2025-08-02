import React from 'react'

function About() {
  return (
    <section id='About_section' className='w-full my-36 flex items-center my-12 px-8 md:px-20'>
        <div className='dark:text-neutral-50'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='text-center my-auto'>
                  <h2 className='my-auto text-4xl font-bold'>What I do?</h2>
                </div>
                

                <div className='text-lg dark:text-neutral-50 mt-4'>
                  <ul className='list-disc list-outside ms-4 gap-8 grid grid-cols-1 grid-rows-[auto_auto]'>
                    <li>
                      <div className='px-4'>Build responsive and accessible web interface.</div>
                    </li>
                    <li>
                      <div className='px-4'>Turn UI/UX designs, Ideas, and solutions into code.</div>
                    </li>
                    <li>
                      <div className='px-4'>Ensure cross-browser and cross-device compatibility.</div>
                    </li>
                  </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About