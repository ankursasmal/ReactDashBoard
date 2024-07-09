import React from 'react'
import style from './SlideOption.module.css'

function SlideOption({name,icons:Icon}) {
  return (
    <div className={`${style.dashBord}`} >
    <div>
    <Icon style={{ width: '1.3vw', height: '1.4vw' }} />
    </div> 
      <a className={`${style.dashBord_Name}`}  >{name}</a>
    
       </div>
  )
}

export default SlideOption
