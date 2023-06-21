import React from 'react'
import UserSectionView from './UserSectionView'

const UserSectionContainer = ({title, topPopularUsers}) => {
  return <UserSectionView title={title} topPopularUsers={topPopularUsers}/>
}

export default UserSectionContainer