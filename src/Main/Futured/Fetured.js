import React from 'react'
import "./Fetured.css"
import feturedImg from '../../Images/features.jpg'
import FeturedItem from './FeturedItem'

export default function Fetured() {
  return (
    <div className='feture-container'>
      <div className='image-box'>
        <img src={feturedImg} alt="" />
      </div>
      <div className='text-box'>
        <FeturedItem />
        <FeturedItem />
        <FeturedItem />
        <FeturedItem />
      </div>
    </div>
  )
}
