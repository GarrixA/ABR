import React from 'react'
import './landing.css';
import logo from '../../images/RAB_Logo2.png';
import { Link } from "react-router-dom"

import { GoGoal } from "react-icons/go";
import { BiLowVision } from "react-icons/bi";
import './landing.scss'


function Homepage() {

  function MouseOver(event) {
    event.target.style.background = 'lightgreen';
  }
  function MouseOut(event) {
    event.target.style.background = "";
  }


  return (
    <>
      <div className='land'>
        <div className='landing-nav'>
          <div className='
          rab-logo1'>
          <img src={logo} alt="" className='landing-log' />
          </div>
          <div className='landing-btn'>
            <Link to="/register"> <button className='landing-signup' onMouseOut={MouseOut} >SIGN UP</button></Link>
            <Link to="/login"><button className='landing-login'  onMouseOut={MouseOut} >LOG IN</button></Link>
          </div>
        </div>
        <div className='middle'>
          <div className='milk'>
            <marquee><p>Welcome to Milk <span className='pas1'>PAS</span></p></marquee>
          </div>
          <div className='text'>
            <div className='mission' >
              <GoGoal className='icon' />
             <strong><span className='span'>MISSION:</span></strong> 
              <p > To develop agriculture and animal resources through research, agricultural extension and animal resources extension in order to increase agricultural and animal resources productivity and quality, as well as their derived products.</p>
            </div>

            <div className='vision'>
              <BiLowVision className='icon' />
             <strong><span className='span'>VISION:</span></strong> 
              <p>Improved food security and livelihoods of all Rwandans by transforming agriculture from subsistence into modern farming through generating research and extension innovations that generate sustainable crop, animal husbandry and natural resource management.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage