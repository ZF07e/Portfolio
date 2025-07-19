import React from 'react'
import Stack_Badge from './Stack_Badge.jsx';


function Project_Card({info}) {
  const primary_button = 'bg-neutral-800 text-neutral-50 font-medium px-8 py-1 rounded cursor-pointer hover:bg-neutral-900 active:opacity-85';
  const secondary_button = 'bg-neutral-200 font-medium px-4 py-1 rounded cursor-pointer hover:bg-neutral-300 active:bg-neutral-400';
  const tertiary_button = 'border-1 border-neutral-400 font-medium px-4 py-1 rounded cursor-pointer hover hover:bg-neutral-100 active:bg-neutral-200';
  const button_order = [primary_button, secondary_button, tertiary_button];


  const images_button = (info)=>{
    if(info.images.length < 1){
      return;
    }
    return <button type="button" className={(info.links.length > 1)? tertiary_button: secondary_button}>Images</button>;
  }

  return (
    <div className='border-2 rounded py-4 px-4 grid grid-cols-[auto_1fr] gap-4'>
        <div>
            <img src={`./src/assets/projects/${info.image}`} className='aspect-square w-24 rounded mt-1' alt="" />
        </div>

        <div>
            <h4 className='font-bold text-xl'>{`${info.title} (${info.role})`}</h4>
            <div className='flex gap-2 mt-1 mb-2'>
              {
                info.stack_used.map((obj, idx)=>{
                  return <Stack_Badge key={idx} stack_title={obj} />
                })
              }
            </div>
            <ul className='list-disc list-outside ms-5 my-4'>
              {
                info.body.map((obj, idx)=>{
                  return <li key={idx} className='text-neutral-800 italic'>{`"${obj}"`}</li>
                })
              }
            </ul>

            <div className='mt-2 flex gap-2 '>
                {
                  info.links.map((obj, idx)=>{
                    return <button type="button" key={idx} className={button_order[idx]}>{obj.link_text}</button>
                  })
                }

                {images_button(info)}
            </div>
        </div>
    </div>
  )
}

export default Project_Card