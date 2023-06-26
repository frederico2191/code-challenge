import React, { useEffect, useState } from 'react'
import { getUserTopRatedRepo } from '../../../../../../api'
import { styled } from '../../../../../../stitches.config'
import CardView from './CardView'
import HoveredCard from './HoveredCard'

const HoverElement = styled("div", {
  width:"320px",
  height:"320px",
  position: 'relative',
  zIndex: 30
})

// const CardWrapper = styled("div", {
//   height: '100%',
//   width: '100%',
//   position: 'relative',
// })

const CardContainer = ({user, error}) => {
  const [hovered, setHovered] = useState(false)
  const [repo, setRepo] = useState('')
  const {login} = user;

    useEffect(() => {
      (async () => {
        const topRatedRepo  = await getUserTopRatedRepo({ username:login });
        setRepo(topRatedRepo?.items?.[0])
      })()
    }, [login])

    const handleEnterHover = () => setHovered(true)
    const handleLeaveHover = () => setHovered(false)

  return !error && (
    <HoverElement data-testid="card" onMouseEnter={handleEnterHover} onMouseLeave={handleLeaveHover}>
      {hovered? <HoveredCard repo={repo} user={user}/> : <CardView  repo={repo} user={user}/>}
    </HoverElement>
  )
}

export default CardContainer