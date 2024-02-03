import React from 'react'
import './css/home.css'


function HomeContent(props){
  return(
    <>
      <div className='homecontenttitle pt-14'>
        {props.title}
      </div>

      <div className='homecontent pl-4 pr-4 pb-10'>
        {props.description}
      </div>
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
        <div>
          <HomeContent title="About me" description="A Computer Science student with a passion for all things computer related, from building desktops to coding. I enjoy anything that challenges my knowledge in the Computer Science profession."/>

          <HomeContent title="Education" description="Enrolled in the Bachelor of Computer Science at Acadia University, currently in my third year. Some completed courses include:"/>
          
            <div className='contentcontainer'>
              <div className='paragraphstyle'>
                <ul className='text-start'>
                  <li>Data Comm & Comp Networks</li>
                  <li>Artificial Intelligence</li>
                  <li>Operating Systems</li>
                  <li>Computer Programming 1-3</li>
                  <li>Comp Architect./Organization 1-2</li>
                  <li>Data Structures and Algorithms</li>
                  <li>Software Engineering</li>
                  <li>Introductory Calculus 1-2</li>
                  <li>Discrete Mathematics</li>
                </ul>
              </div>
            </div>
          </div>
    </div>
    </>
  )
}
