import React from 'react'

function proficiency_class(stack_proficiency){
  if(stack_proficiency == "1"){
    return 'text-red-500';
  }
  else if(stack_proficiency == "2"){
    return 'text-orange-400';
  }
  else{
    return 'text-green-400';
  }
}

function proficiency_title(stack_proficiency){
  if(stack_proficiency == "1"){
    return 'Expert';
  }
  else if(stack_proficiency == "2"){
    return 'Intermediate';
  }
  else{
    return 'Beginner';
  }
}

function Stack_Card({src, stack_name, proficiency}) {
  return (
    <div className='w-full h-full flex justify-center items-center opacity-0 animate-(--animate-slide_up) transform bg-neutral-200/70 dark:bg-neutral-900/40 rounded pb-2 pt-4'>
      <div className='text-center grid grid-rows-2'>
        <div className='flex justify-center w-25'>
          <img src={`/public/stacks/${src}`} className='aspect-square w-14' alt="" />
        </div> 
        <div>
          <h4 className='mt-2 font-medium'>{stack_name}</h4>
          <p className={`${proficiency_class(proficiency)} text-sm font-medium`}>{proficiency_title(proficiency)}</p>
        </div>
      </div>
    </div>
  )
}

export default Stack_Card