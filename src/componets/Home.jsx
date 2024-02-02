import React from 'react'
import './css/home.css'


function HomeContent(props){
  return(
    <>
      <div className='homecontenttitle pt-14'>
        {props.title}
      </div>

      <div className='homecontent pl-4 pr-4 pb-4 pt-4'>
        {props.intro}
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
        <span>
          <HomeContent title="About me" intro="Hello! I'm Neel," description="A Computer Science student with a passion for anything computer related, from building destops to coding a bash script; I find myself enjoying anything that challanged my skillset in the computer field. I tend to spend most of my time on my computer creating new apps and project"/>

          <HomeContent title="Education" intro="Third year Computer Science" description="lorem"/>
        </span>
    </div>
    </>
  )
}
