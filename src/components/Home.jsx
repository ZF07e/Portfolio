import React from 'react'
import ContactLinks from './ContactLinks.jsx'

// Home Section Component
function Home() {
    //"w-full h-[50%] grid grid-cols-2 gap-100 border-y-1 bg-[url(./src/assets/square_grid.png)] bg-cover bg-center b-no-repeat"
     const main_container_class = {
        mobile: "w-full h-[70%] grid grid-rows-2",
        tablet: "md:h-[50%] md:grid-rows-1 md:grid-cols-2 md:gap-20 md:px-12"
     }   

    //Elements for home
    return (
        <section className='w-full h-dvh flex items-center bg-[url(./src/assets/BG_Doubled.png)] dark:bg-[url(./src/assets/BG_doubled_dark.png)] bg-cover bg-bottom b-no-repeat'>
            <div className={`${main_container_class.mobile} ${main_container_class.tablet}`}>
                <div className='my-auto mx-auto order-2 md:order-1 dark:text-neutral-50 text-center md:text-start md:mx-0 md:ms-auto'>
                    <div >
                        <h2 className='text-3xl font-bold'>Marius Brylle U. Pastoral</h2>
                        <p className='text-xl font-medium text-neutral-500'>BS Information Technology</p>
                        <h5 className='text-xl font-bold'>Front-End Developer</h5>
                    </div>
                    <div className='w-full flex justify-center items-center mt-2 md:justify-start'>
                        <ContactLinks />
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