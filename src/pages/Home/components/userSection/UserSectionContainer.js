import React from 'react'
import UserSectionView from './UserSectionView'

const UserSectionContainer = ({title, users}) => {
  return <UserSectionView title={title} users={users}/>
}

export default UserSectionContainer