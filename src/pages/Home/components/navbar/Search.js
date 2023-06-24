import React from 'react'
import { styled } from '../../../../stitches.config'
import { BsSearch } from 'react-icons/bs';

const SearchWrapper = styled("div",{
  width:'500px',
  display: "flex",
  alignContent: "center",
  alignItems: "center",
  position: 'relative'
})

const Input = styled("input",{
  borderRadius:"9999px",
  width:"490px",
  borderWidth: "0",
  outline: 'none',
  paddingLeft: 35,
  height: 25,
})

const SearchIcon = styled(BsSearch, {
  position: 'absolute',
  left: 0,
  marginLeft: 10
})

const Search = () => {
  return (
    <SearchWrapper>
      <Input placeholder='Search' />
      <SearchIcon/>
    </SearchWrapper>
  )
}

export default Search