import React from 'react'
import Button from './Button'


function Card({icons,title,body,bgcolor,btnText}) {
  return (
    <div>
    <span>
  <img src={icons} alt={title}/>
    </span>
    <h2>{title}</h2>
    <p>{body}</p>
    <Button textColor={btnText}/>

    </div>
  )
}

export default Card
