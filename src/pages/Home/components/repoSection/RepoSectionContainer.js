import React from 'react'
import RepoSectionView from './RepoSectionView'

const RepoSectionContainer = ({title, repos, error}) => {
  return <RepoSectionView title={title} repos={repos} error={error}/>
}

export default RepoSectionContainer