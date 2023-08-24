import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year: 2020,
        title: 'aragos engineer',
        duration: '3 years',
        details: 'lorem ipsum dolor ist iouasdgiujoagjiosrgajsfio ashf ads9o asioudfj hnw089h asdflkjhn'
    },
    {
        year: 2021,
        title: 'aragos engineer',
        duration: '3 years',
        details: 'lorem ipsum dolor ist iouasdgiujoagjiosrgajsfio ashf ads9o asioudfj hnw089h asdflkjhn'
    },
    {
        year: 2022,
        title: 'aragos engineer',
        duration: '3 years',
        details: 'lorem ipsum dolor ist iouasdgiujoagjiosrgajsfio ashf ads9o asioudfj hnw089h asdflkjhn'
    },
    {
        year: 2023,
        title: 'aragos engineer',
        duration: '3 years',
        details: 'lorem ipsum dolor ist iouasdgiujoagjiosrgajsfio ashf ads9o asioudfj hnw089h asdflkjhn'
    },
]

const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
        {data.map((item, idx) => (
            <WorkItem 
            key={idx} 
            year={item.year} 
            title={item.title} 
            duration={item.duration} 
            details={item.details}
            />
        ))}
    </div>
  )
}

export default Work