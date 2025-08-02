import {useEffect, useState} from 'react'

// Header component of the website
function Header() {
    const html = document.documentElement;
    const [active, setActive] = useState(false);
    const [mode, setMode] = useState(document.cookie);

    const isActive = ()=>{
        if(!active){
            setActive(true);
        }
        else{
            setActive(false);
        }
    }

    useEffect(()=>{
        document.cookie = mode;
        html.dataset.theme = mode.split("=")[1];
    }, [mode]);

    const change_mode = ()=>{
        console.log("Mode changed! to " + document.cookie + " " + html.dataset.theme)
        if(html.dataset.theme == "dark"){
            setMode("theme=light");
        }
        else{
            setMode("theme=dark");
        }
    }

    //Elements for header
    return (
        <header className={`fixed top-0 left-0 right-0 dark:text-neutral-50 bg-neutral-50 dark:bg-neutral-900 
                           ${active? "h-auto": "h-14"} z-100 grid grid-cols-2 md:grid-cols-[auto_auto_auto] px-4 border-b overflow-hidden`}>
            <div>
                <div className={`w-12 h-12 mt-2 bg-[url(/src/assets/racoon.png)] bg-center bg-cover bg-no-repeat dark:bg-[url(/src/assets/racoon1_light.png)]`}></div>
            </div>

            <div className='flex md:hidden h-full w-full items-center'>
                <div className="ms-auto border p-2 rounded-full" onClick={()=>{isActive()}}>
                    <div className="w-5 aspect-square bg-[url(/src/assets/menu.png)] dark:bg-[url(/src/assets/menu_light.png)] bg-center bg-cover bg-no-repeat"></div>
                </div>
            </div>

            <div className='col-span-2 p-2 my-2 rounded md:col-span-1 md:p-0 md:m-0 bg-neutral-200 md:bg-neutral-50 dark:bg-neutral-950 md:dark:bg-neutral-900'>
                {/* gap-12 */}
                <nav className='flex flex-col md:flex-row gap-4 md:gap-8 md:justify-center md:items-center items-end font-roboto font-medium h-full w-full'>   
                    <a href="#Home_section" className='cursor-pointer' onClick={()=>{isActive()}}>Home</a>
                    <a href="#About_section" className='cursor-pointer' onClick={()=>{isActive()}}>What i do?</a>
                    <a href="#stack_section" className='cursor-pointer' onClick={()=>{isActive()}}>Stack</a>
                    <a href="#Project_section" className='cursor-pointer' onClick={()=>{isActive()}}>Projects</a>
                    <a href="#Contact_section" className='cursor-pointer' onClick={()=>{isActive()}}>Resume</a>
                    <a href="#Contact_section" className='cursor-pointer' onClick={()=>{isActive()}}>Contact</a>
                    <div className='flex items-center justify-end md:hidden'>
                        <div className='border dark:border-neutral-50 rounded-full p-2 cursor-pointer' onClick={()=>{change_mode()}}>
                            <div className='w-5 h-5 bg-[url(/src/assets/dark_mode.png)] bg-center bg-cover bg-no-repeat dark:bg-[url(/src/assets/light_mode.png)]' ></div>
                        </div>
                    </div>
                </nav>
            </div>

             <div className='hidden md:flex items-center justify-end pe-4 order-2'>
                 <div className='border dark:border-neutral-50 rounded-full p-2 cursor-pointer' onClick={()=>{change_mode()}}>
                     <div className='w-5 h-5 bg-[url(/src/assets/dark_mode.png)] bg-center bg-cover bg-no-repeat dark:bg-[url(/src/assets/light_mode.png)]' ></div>
                 </div>
             </div>
        </header>
    )
}

export default Header