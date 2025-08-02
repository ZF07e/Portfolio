import React from 'react'
import Stack_Card from './Stack_Card.jsx'

function Stack() {
  return (
    <section id='stack_section' className='dark:text-neutral-50 pb-16'>
        <h2 className="text-2xl font-bold text-center">My Stack</h2>
        <section className='px-8 md:px-16 lg:px-40 mt-12'>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-4 sm:gap-4 ">
              <Stack_Card src={'html.png'} stack_name={"HTML"} proficiency={2} />
              <Stack_Card src={'css.png'} stack_name={"CSS"} proficiency={2} />
              <Stack_Card src={'js.png'} stack_name={"JavaScript"} proficiency={2} />
              <Stack_Card src={'java.png'} stack_name={"Java"} proficiency={2} />
              <Stack_Card src={'cSharp.png'} stack_name={"C#"} proficiency={2} />
              <Stack_Card src={'bootstrap.png'} stack_name={"Bootstrap"} proficiency={2} />
              <Stack_Card src={'jquery.svg'} stack_name={"jQuery"} proficiency={2} />
              <Stack_Card src={'mysql.png'} stack_name={"MySQL"} proficiency={2} />
              <Stack_Card src={'tailwindcss.png'} stack_name={"TailwindCss"} proficiency={0} />
              <Stack_Card src={'react.png'} stack_name={"React"} proficiency={0} />
              <Stack_Card src={'node.png'} stack_name={"Node JS"} proficiency={0} />
              <Stack_Card src={'express.png'} stack_name={"Express.js"} proficiency={0} />
              <Stack_Card src={'git.png'} stack_name={"Git"} proficiency={2} />
          </div >

        </section>
        
    </section>
  )
}

export default Stack