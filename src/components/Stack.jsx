import React from 'react'
import Stack_Card from './Stack_Card.jsx'

function Stack() {
  return (
    <section className='md:h-dvh py-16 dark:text-neutral-50'>
        <h2 className="text-2xl font-bold text-center">My Stack</h2>
        
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-9 px-8 sm:px-12 md:px-20 mt-12">
            <Stack_Card src={'html.png'} stack_name={"HTML"} />
            <Stack_Card src={'css.png'} stack_name={"CSS"} />
            <Stack_Card src={'js.png'} stack_name={"JavaScript"} />
            <Stack_Card src={'java.png'} stack_name={"Java"} />
            <Stack_Card src={'cSharp.png'} stack_name={"C#"} />
            <Stack_Card src={'bootstrap.png'} stack_name={"Bootstrap"} />
            <Stack_Card src={'jquery.svg'} stack_name={"jQuery"} />
            <Stack_Card src={'tailwindcss.png'} stack_name={"TailwindCss"} />
            <Stack_Card src={'mysql.png'} stack_name={"MySQL"} />
            <Stack_Card src={'react.png'} stack_name={"React"} />
            <Stack_Card src={'node.png'} stack_name={"Node JS"} />
            <Stack_Card src={'express.png'} stack_name={"Express.js"} />
            <Stack_Card src={'git.png'} stack_name={"Git"} />
            
        </section>
        
    </section>
  )
}

export default Stack