import React from 'react'
import Project_Card from './Project_Card.jsx';
import portfolio from '../../portfolio-data.json';

function Projects() {
    const projects = portfolio.Projects;
    return (
        <section id='Project_section' className="pb-12 md:px-8 dark:text-neutral-50">
            <div>
                <h2 className="font-bold text-2xl text-center">Projects</h2>
            </div>
            <div className='mt-8 grid grid-cols-1 gap-4 px-12 md:px-40 lg:px-60 divide-y-1 md:divide-y-0 '>
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