import React, { useState } from 'react'
import "./component.scss"

export default function SectionTile(props) {
    
  return (
    <div className='tile'>
        <span> </span>
        <span> </span>
        <span> </span>
        <span> </span>
        {props.title}
    </div>
  )
}
