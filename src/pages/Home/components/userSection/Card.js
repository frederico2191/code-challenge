import React from 'react'

const Card = ({name, id, followers, project, image}) => {
  return (
    <>
      <span>{name}</span>
      <span>{id}</span>
      <span>{followers}</span>
      <span>{project}</span>
      <span>{image}</span>
    </>
  )
}

export default Card