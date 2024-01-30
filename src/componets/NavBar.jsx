import {React, useState} from 'react'

import './css/navbar.css'



export default function NavBar() {

    const [isOpen, setOpen] = useState(0);
    
    const toggleDropDown = () => {
        if(isOpen == 1){
            document.getElementById("myDropDown").style.height = "0px";
            setOpen(0);
        }
        else{
            setOpen(1)
            document.getElementById("myDropDown").style.height = "250px";
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
            <a href='' className='p-2'>TEST</a>
            <a href='' className='p-2'>TEST</a>
            <a href='' className='p-2'>TEST</a>
        </div>
    </div>

    </>
  )
}
