import React, { useState } from 'react'
import CardView from './CardView'
import HoveredCard from './HoveredCard'

const CardContainer = ({user}) => {
  const [hovered, setHovered] = useState(false)
  // const hovered = true
  return (
    // <CardView name={name} id={id} follower/>

    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>

      {hovered? <HoveredCard user={user}/> : <CardView user={user}/>}
    </div>
    
  )
}

export default CardContainer