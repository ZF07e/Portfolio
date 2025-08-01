import React from 'react'
import ContactLinks from './ContactLinks.jsx'

// Home Section Component
function Home() {
    //Elements for home
    return (
        <section id='Home_section' className='w-full'>

            <div className={'w-full h-[70%] grid grid-rows-2 md:py-40 | md:h-[50%] md:grid-rows-1 md:grid-cols-2 md:gap-50 md:px-12'}>

                <div className='my-auto mx-auto order-2 md:order-1 dark:text-neutral-50 text-center md:text-start md:mx-0 md:ms-auto'>
                    <div >
                        <h2 className='text-3xl font-bold'>Marius Brylle U. Pastoral</h2>
                        <p className='text-xl font-medium text-neutral-500'>BS Information Technology</p>
                        <h5 className='text-xl font-bold'>Front-End Developer</h5>
                    </div>

                    <div className='w-full flex justify-center items-center mt-2 md:justify-start'>
                        <ContactLinks />
                    </div>

                    <div className="w-full">
                        <p className='font-roboto italic text-md dark:text-neutral-50 mt-4 md:w-sm px-8 md:px-0'>
                            Recently graduated from STI College Alabang with a degree in Information Technology, focused on Software Development. I build user-friendly websites that focus on simplicity and a smooth user experience.
                        </p>
                    </div>

                </div>
                
                <div className='my-auto mx-auto md:mx-0 md:me-auto md:ms-20 md:order-2'>
                    <img src="./src/assets/profile.jpg" className="aspect-square w-50 md:w-60 animate-(--animate-blob-effect) transition-(--profile) shadow-lg/50" alt="" />
                </div>

            </div>
        </section>
    )
}

export default Home