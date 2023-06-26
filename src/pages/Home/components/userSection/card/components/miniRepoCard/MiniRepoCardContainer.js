import React from 'react'
import MiniRepoCardView from './MiniRepoCardView'

const MiniRepoCardContainer = ({repo}) => {
 
  return (
    <MiniRepoCardView data-testid="mini-repo-card"repo={repo}/>
  )
}

export default MiniRepoCardContainer