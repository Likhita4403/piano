import React from 'react'
import { Piano } from './Piano'
import './Home.css'
function Home() {
  return (
    <div>
      <ul className='list text-white'>
      <li className='pe-4'><i className="fa-solid fa-music fa-4x"></i></li><li><h1 className='display-5'>  PLAY THE PIANO </h1></li>
      </ul>
      <Piano />      
    </div>
  )
}

export default Home