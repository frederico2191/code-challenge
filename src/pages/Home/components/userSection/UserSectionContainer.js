import React from 'react'
import UserSectionView from './UserSectionView'

const UserSectionContainer = ({title, users, error}) => {
  return <UserSectionView title={title} users={users} error={error}/>
}

export default UserSectionContainer