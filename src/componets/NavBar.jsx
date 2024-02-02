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


export default function NavBar() {

    const [isOpen, setOpen] = useState(0);
    
    const toggleDropDown = () => {

        //scrolls to top to see navbar.
        window.scrollTo({top: 0, behavior: 'smooth'});
        
        //active state for our navbar.
        if(isOpen == 1){
            document.getElementById("myDropDown").style.height = "0px";
            setOpen(0);
        }
        else{
            setOpen(1)
            document.getElementById("myDropDown").style.height = "208px";
        }
    }

  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <div className='navbar h-12'>
        <div className='lefttitle'>Neel K</div>
        <button className='button' onMouseEnter={toggleDropDown} onClick={toggleDropDown}>
            <i className='fa fa-bars md:invisible'></i>
            <div className='top-0 right-0 hidden md:inline md:text-black md:text-lg md:border md:p-1 md:rounded-xl'>Links</div>
        </button>
    </div>
    
    <div id='myDropDown' className='dropdown' onMouseLeave={toggleDropDown}>
        <div className='flex flex-col gap-2 p-2'>
            <ReactiveLinks link="https://github.com/NeelthebigGuy" name="GitHub"/>
            <ReactiveLinks link="https://www.linkedin.com/in/neel-khiroya-71a177239/" name="LinkedIn"/>
            <ReactiveLinks link="https://www.instagram.com/neelkhiroya/" name="Instagram"/>
            <ReactiveLinks link="mailto:neel@khiroya.ca" name="Email me"/>
        </div>
    </div>

    </>
  )
}
