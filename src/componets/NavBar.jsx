import {React, useState} from 'react'
import { motion } from 'framer-motion';

import './css/navbar.css'


function ReactiveLinks(props){

    return (
        <motion.a href={props.link} className='p-2'
        whileHover={{scale:1.01}}>
            {props.name}
        
        </motion.a>
    )

}

function scroll() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

export default function NavBar() {

    const [isOpen, setOpen] = useState(0);
    
    const closemenu = () => {
        document.getElementById("myDropDown").style.height = "0px";
        setOpen(0);
    }

    const openmenu = () => {    
        document.getElementById("myDropDown").style.height = "258px";
        setOpen(1);
    }

    const toggleDropDown = () => {

        //scrolls to top to see navbar.
        window.scrollTo({top: 0, behavior: 'smooth'});
        
        //active state for our navbar.
        //close
        if(isOpen == 1){
            closemenu();
        }
        //open
        else{
            openmenu();
        }
    }

  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <div className='navbar h-12 md:hidden'>
        <div className='lefttitle md:pl-2 cursor-pointer' onClick={scroll}>Neel K</div>
        <button className='button' onClick={toggleDropDown}>
            <i className='fa fa-bars'></i>
        </button>
        
    </div>

    <div className='hidden md:flex navbar md:h-12' onMouseEnter={openmenu}>
        <div className='lefttitle md:pl-2 cursor-pointer' onClick={scroll}>Neel K</div>
        <button className='button' onClick={toggleDropDown}>
            <div className='top-0 right-0 hidden md:inline md:text-black md:text-lg md:pr-2'>Links</div>
        </button>
    </div>
    
    <div id='myDropDown' className='dropdown' onMouseLeave={closemenu}>
        <div className='flex flex-col gap-2 p-2'>
            <ReactiveLinks link="https://github.com/NeelthebigGuy" name="GitHub"/>
            <ReactiveLinks link="https://www.linkedin.com/in/neel-khiroya-71a177239/" name="LinkedIn"/>
            <ReactiveLinks link="https://www.instagram.com/neelkhiroya/" name="Instagram"/>
            <ReactiveLinks link="mailto:neel@khiroya.ca" name="Email me"/>
            <ReactiveLinks link="https://drive.google.com/file/d/1M_5zHfpoPvn-l34Yxurk07CPyne6nsF6/view" name="See my Resume"/>
        </div>
    </div>

    </>
  )
}
