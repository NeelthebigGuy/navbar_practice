import React from 'react'

import './css/footer.css'

export default function Footer() {
  return (
    <div className='myfootercontainer'>
        <div className='bar'/>
        <div className='myfooter flex justify-between'>
            <div>
                <div>
                    Made by Neel Khiroya
                </div>
                <div>
                    Click my Name to Scroll Up
                </div>
            </div>
            <div className='text-end'>
                <div>
                    Neel@Khiroya.ca
                </div>
                <a href='https://home.khiroya.ca/'>
                    Home Page
                </a>
                <div>
                    Feb 2024
                </div>
            </div>
        </div>
    </div>
  )
}
