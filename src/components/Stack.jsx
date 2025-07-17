import React from 'react'
import Stack_Card from './Stack_Card.jsx'

function Stack() {
  return (
    <section className='h-dvh border-t-1 py-8'>
        <h2 className="text-2xl font-bold text-center">My Stack</h2>
        
        <section className="grid grid-cols-5 gap-9 px-20">
            <Stack_Card src={'html.png'} />
            <Stack_Card src={'css.png'} />
            <Stack_Card src={'js.png'} />
            <Stack_Card src={'java.png'} />
            <Stack_Card src={'cSharp.png'} />
            <Stack_Card src={'bootstrap.png'} />
            <Stack_Card src={'jquery.svg'} />
            <Stack_Card src={'tailwindcss.png'} />
            <Stack_Card src={'mysql.png'} />
            <Stack_Card src={'react.png'} />
            <Stack_Card src={'node.png'} />
            <Stack_Card src={'express.png'} />
            <Stack_Card src={'git.png'} />
            
        </section>
        
    </section>
  )
}

export default Stack