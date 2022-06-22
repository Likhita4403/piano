import React from 'react'
import { Piano } from './Piano'
import './Home.css'
function Home() {
  return (
    <div>
      <ul className='list'>
      <li className='pe-4'><i class="fa-solid fa-music"></i></li><li><h1 className='display-6'>  PLAY THE PIANO </h1></li>
      </ul>
      <Piano />      
    </div>
  )
}

export default Home