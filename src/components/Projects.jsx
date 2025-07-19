import React from 'react'
import Project_Card from './Project_Card.jsx';
import portfolio from '../../portfolio-data.json';

function Projects() {
    const projects = portfolio.Projects;
  return (
    <section className="py-16 px-20 border-t-1">
        <div>
            <h2 className="font-bold text-2xl text-center">Projects</h2>
        </div>
        <div className='mt-8 mx-40 grid grid-cols-1 gap-4 '>
            {
                projects.map((obj, idx)=>{
                    return <Project_Card key={idx} info={obj} />
                })
            }
            
        </div>
    </section>
  )
}

export default Projects