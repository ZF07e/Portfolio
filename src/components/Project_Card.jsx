import React from 'react'
import Stack_Badge from './Stack_Badge.jsx';


function Project_Card({info}) {
  //py-8 md:px-4 grid grid-cols-[auto_1fr] gap-8 hover:bg-neutral-900 
  return (
    <div className='relative md:rounded transition grid 
                    grid-rows-[auto_1fr] md:grid-rows-1 gap-y-4 gap-x-4
                    grid-cols-1 md:grid-cols-[auto_1fr] 
                    dark:bg-neutral-900/40 pt-4 px-4'>
        <div className='mx-auto'>
            <img src={`./src/assets/projects/${info.image}`} className='aspect-square w-20 rounded mt-1' alt="" />
        </div>

        <div>
            <h4 className='font-bold text-xl'>{`${info.title} (${info.role})`}
              <span className='inline-block px-2'>
                <div className="w-4 aspect-square bg-[url(./src/assets/link.png)] dark:bg-[url(./src/assets/link_light.png)] bg-center bg-cover bg-no-repeat"></div>
              </span>
            </h4>
            <div className='flex gap-2 my-4 flex-wrap'>
              {
                info.stack_used.map((obj, idx)=>{
                  return <Stack_Badge key={idx} stack_title={obj} />
                })
              }
            </div>
            <ul className='list-disc list-outside ms-5 my-4'>
              {
                info.body.map((obj, idx)=>{
                  return <li key={idx} className='text-neutral-800 dark:text-neutral-400 italic'>{`"${obj}"`}</li>
                })
              }
            </ul>
        </div>

        <div className='absolute right-0 m-2 mt-2'>
        </div>
    </div>
  )
}

export default Project_Card