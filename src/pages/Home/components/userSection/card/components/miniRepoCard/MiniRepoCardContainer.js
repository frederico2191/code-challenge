import React from 'react'
import MiniRepoCardView from './MiniRepoCardView'

const MiniRepoCardContainer = ({user}) => {
 
  return (
    // <CardView name={name} id={id} follower/>
    <MiniRepoCardView user={user}/>
  )
}

export default MiniRepoCardContainer