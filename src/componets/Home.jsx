import React from 'react'
import './css/home.css'

export default function Home() {
  return (
    <>
    <div className='mycontainer'>
        <div className=''>
          <h1 className='mytitle bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text'>
            Neel Khiroya
          </h1>
        </div>
    </div>

    <div className='mycontainer pt-8 pb-8 border-b border-[#ADB5BD]'>
      Third year computer science student
    </div>

    <div className='contentcontainer'>
      <div className='contenttitle'>
        Welcome to my portfolio
      </div>
    </div>

    <div className='contentcontainer'>
        <div className=''>
          About me
        </div>
    </div>
    </>
  )
}
