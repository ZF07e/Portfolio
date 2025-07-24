import {useEffect, useState} from 'react'

// Header component of the website
function Header() {
    //Navigation class
    const nav_container_class = {
        mobile: "flex items-end justify-center order-3 col-span-2 w-full",
        tablet: "md:order-2 md:col-span-1 md:items-center md:w-auto"
    }
    
    const nav_container2_class = {
        mobile: `grid grid-cols-4 divide-x-2 border-t-2 p-2 text-center font-medium cursor-pointer w-full bg-stone-50 
                dark:border-neutral-50 dark:divide-neutral-50 dark:text-neutral-50 dark:bg-neutral-800`,

        tablet: "md:border-2 md:rounded md:w-auto"
    }

    const nav_class = {
        mobile: "py-2 hover:translate-y-[-2px] hover:underline transition",
        tablet: "md:px-8"
    };

    //Header class
    const header_class = {
        mobile: "fixed z-100 top-0 left-0 right-0 bottom-0 mt-2 grid grid-cols-2 grid-rows-[auto_1fr]",
        tablet: "md:grid-rows-1 md:grid-cols-[auto_1fr_auto] md:mt-4 md:bottom-auto md:gap-4 md:px-16 md:h-20"
    }
    
    //Logo class
    const logo_container_class = {
        mobile: "h-full flex items-center justify-start ps-4 order-1"
    }

    //Dark mode toggle class
    const dark_container_class ={
        mobile: "flex items-center justify-end pe-4 order-2"
    }

    //Elements for header
    return (
        // fixed z-100 top-0 left-0 right-0 h-20 mt-4 px-16 grid grid-cols-[auto_1fr_auto]
        <header className={`${header_class.mobile} ${header_class.tablet}`}>

            <div className={logo_container_class.mobile}>
                <div className="w-16 h-16 mt-2 bg-[url(./src/assets/racoon1.png)] bg-center bg-cover bg-no-repeat dark:bg-[url(./src/assets/racoon1_light.png)]"></div>
            </div>

            <div className={`${nav_container_class.mobile} ${nav_container_class.tablet}`}>
                <div className={`${nav_container2_class.mobile} ${nav_container2_class.tablet}`}>
                    <div><nav className={`${nav_class.mobile} ${nav_class.tablet}`}>Home</nav></div>
                    <div><nav className={`${nav_class.mobile} ${nav_class.tablet}`}>About</nav></div>
                    <div><nav className={`${nav_class.mobile} ${nav_class.tablet}`}>Stack</nav></div>
                    <div><nav className={`${nav_class.mobile} ${nav_class.tablet}`}>Projects</nav></div>
                </div>
            </div>

            <div className={`${dark_container_class.mobile}`}>
                <div className='border-2 dark:border-neutral-50 rounded-full p-2 cursor-pointer'>
                    <div className='w-5 h-5 bg-[url(./src/assets/dark_mode.png)] bg-center bg-cover bg-no-repeat dark:bg-[url(./src/assets/light_mode.png)]' ></div>
                </div>
            </div>
        </header>
    )
}

export default Header