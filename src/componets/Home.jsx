import React from 'react'
import { motion } from 'framer-motion'
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
          <motion.h1  className='mytitle bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text'
                      animate={{opacity: 1, zIndex: 10}}
                      initial={{opacity: 0, zIndex:10}}
                      transition={{duration: .5}}>
            Neel Khiroya
          </motion.h1>
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

    <div className='contentcontainer md:pl-10 md:pr-10'>
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

            <HomeContent title="Experience" description="As a computer science student, I bring a strong academic background and a wealth of knowledge in building and maintaining computers, as well as proficiency in coding. While my experience has primarily been focused on academic pursuits, I am eager to transition this expertise into real-world applications. I have been building, maintaing and upgrading gaming desktop computers for over 4 years. I am able to install/repair Windows operating systems and build a desktop compuer from parts."/>
          
          
          </div>
    </div>
    </>
  )
}
