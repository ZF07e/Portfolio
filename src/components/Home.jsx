import React from 'react'

function Home() {
  return (
    <section className='w-full h-dvh flex items-center'>
        <div className="w-full h-[50%] grid grid-cols-2 gap-100 border-y-1 bg-[url(./src/assets/square_grid.png)] bg-cover bg-center b-no-repeat">
            <div className='my-auto ms-auto'>
                <div>
                    <h2 className='text-3xl font-bold'>Marius Brylle U. Pastoral</h2>
                    <p className='text-xl font-medium text-neutral-500'>BS Information Technology</p>
                    <h5 className='text-xl font-bold'>Front-End Developer</h5>
                </div>
                <div>
                
                </div>
            </div>

            <div className='my-auto me-auto'>
                <img src="./src/assets/profile.jpg" className="aspect-square w-50 animate-(--animate-blob-effect) transition-(--profile) shadow-md/30" alt="" />
            </div>
        </div>
    </section>
  )
}

export default Home