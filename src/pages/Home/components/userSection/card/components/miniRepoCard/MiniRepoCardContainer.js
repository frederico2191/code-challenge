import React from 'react'
import MiniRepoCardView from './MiniRepoCardView'

const MiniRepoCardContainer = ({repo}) => {
 
  return (
    // <CardView name={name} id={id} follower/>
    <MiniRepoCardView repo={repo}/>
  )
}

export default MiniRepoCardContainer