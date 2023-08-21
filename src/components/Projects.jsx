import React from 'react'
import ProjectItem from './ProjectItem'
import blueImg from '../assets/blue.png'
import yellowImg from '../assets/yellow.png'
import pinkImg from '../assets/pink.png'
import greenImg from '../assets/green.png'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto m:pl-20 p-4 py-16'>
    <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel mauris placerat, lobortis purus id, dictum ligula. Phasellus ultrices velit eget enim aliquet rhoncus.
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={blueImg} title='blue'/>
            <ProjectItem img={yellowImg} title='yellow' />
            <ProjectItem img={pinkImg} title='pink' />
            <ProjectItem img={greenImg} title='green'/>
        </div>
    </div>
  )
}

export default Projects