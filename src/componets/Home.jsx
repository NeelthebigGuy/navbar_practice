import React from 'react'
import './css/home.css'


function HomeContent(props){
  return(
    <>
    </>
  )
}


export default function Home() {
  return (
    <> 
    {/* Title */}
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

    {/* Content */}

    <div className='contentcontainer'>
      <div className='contenttitle pt-12'>
        Welcome to my portfolio
        <hr className='mt-2'/>
      </div>
    </div>

    <div className='contentcontainer'>
        <span>
          <div className='homecontenttitle pt-10'>
            About me
          </div>

          <div className='homecontent pl-4 pr-4 pb-10'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus accusantium minima maxime reprehenderit? Nobis, impedit deserunt reiciendis obcaecati illum, vitae cum incidunt officiis delectus vero minus id pariatur, maxime perferendis?
          </div>

          <div className='homecontenttitle pt-10'>
            Education
          </div>

          <div className='homecontent pl-4 pr-4 pb-10'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus accusantium minima maxime reprehenderit? Nobis, impedit deserunt reiciendis obcaecati illum, vitae cum incidunt officiis delectus vero minus id pariatur, maxime perferendis?
          </div>
        </span>
    </div>
    </>
  )
}
