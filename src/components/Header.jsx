import React from 'react'

function Header() {
    const nav_class = 'px-12 py-2 hover:translate-y-[-2px] hover:underline transition';
  return (
    <header className="fixed z-100 top-0 left-0 right-0 h-20 mt-4 px-16 grid grid-cols-[auto_1fr_auto]">
        <div className='h-full flex items-center justify-center'>
            <img src="./src/assets/racoon1.png" className='w-16 aspect-square mt-2' alt="" />
        </div>

        <div className='flex items-center justify-center'>
            <div className='grid grid-cols-4 divide-x-2 border-2 p-2 rounded text-center font-medium cursor-pointer bg-[url(./src/assets/dot_grid.png)] bg-center bg-cover bg-no-repeat'>
                <div><nav className={nav_class}>Home</nav></div>
                <div><nav className={nav_class}>About</nav></div>
                <div><nav className={nav_class}>Stack</nav></div>
                <div><nav className={nav_class}>Projects</nav></div>
            </div>
        </div>

        <div className='flex items-center justify-center'>
            <div className='border-2 rounded-full p-2 cursor-pointer'>
                <img src="./src/assets/dark_mode.png" className='w-5' alt="" />
            </div>
        </div>
    </header>
  )
}

export default Header