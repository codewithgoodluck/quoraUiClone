import React from 'react'
import '../styles/Quora.css'
import Feed from './Feedq.js'
import Navbarq from './Navbarq'
import Sidebar from './Sidebar'
import Widget from './Widget'


function Quora() {
  return (
    <div>
        <Navbarq></Navbarq>
        <div className='quora_container'>
          <Sidebar></Sidebar>
          <Feed></Feed>
          <Widget></Widget>

        </div>
    </div>
  )
}

export default Quora