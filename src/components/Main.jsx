import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover object-left scale-x-[-1]' src='https://images.unsplash.com/photo-1620651840447-0515d1cdf7a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80' alt=''></img>
        <div className='w-full h-screen absolute top-0 left-0 bg-white/10'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
            <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'> I'm Yunus Emre Uslu</h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'> I'm a
            <TypeAnimation
            sequence={[
            'Front-End Developer',
            2000, 
            'Problem Solver',
            2000,
            'Hard Worker',
            2000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            style={{ fontSize: '1em', paddingLeft: '5px'}}
            />
            </h2>
            <div className='flex justify-between pt-6 max-w-[150px] w-full'>
                <FaLinkedinIn size={20} className='cursor-pointer'/>
                <FaGithub size={20} className='cursor-pointer'/>
            </div>
            </div>
        </div>

    </div>
  )
}

export default Main