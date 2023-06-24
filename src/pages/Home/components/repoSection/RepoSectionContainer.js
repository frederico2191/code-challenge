import React from 'react'
import RepoSectionView from './RepoSectionView'

const RepoSectionContainer = ({title, repos}) => {
  return <RepoSectionView title={title} repos={repos}/>
}

export default RepoSectionContainer