import React, { useEffect, useState } from 'react'
import { getUserTopRatedRepo } from '../../../../../api'
import CardView from './CardView'
import HoveredCard from './HoveredCard'

const CardContainer = ({user}) => {
  const [hovered, setHovered] = useState(false)
  const [repo, setRepo] = useState('')
  const {login} = user;

    useEffect(() => {
      (async () => {
        const topRatedRepo  = await getUserTopRatedRepo({ username:login });
        setRepo(topRatedRepo.items[0])
      })()
    }, [login])

  return (
    <div data-testid="card" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      {hovered? <HoveredCard repo={repo} user={user}/> : <CardView  repo={repo} user={user}/>}
    </div>
    
  )
}

export default CardContainer