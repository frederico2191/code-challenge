import React, { useEffect, useState } from 'react'
import { styled } from '../../../../stitches.config'
import { BsSearch } from 'react-icons/bs';
import { useSearchParams } from 'react-router-dom';
import _ from 'lodash'

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
  // display:'block'
})

const SearchIcon = styled(BsSearch, {
  position: 'absolute',
  left: 0,
  marginLeft: 10
})

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    console.log('entered useEffect', searchParams.get("query"))
    setSearchText(searchParams.get("query"))
  },[searchParams])
  
  // const handleSearch = _.debounce((event) => {
  //   searchParams.set("query", event.target.value)
  //   setSearchParams(searchParams)
  // }, 500)

  const handleSearch = (event) => {
    searchParams.set("query", event.target.value)
    setSearchParams(searchParams)
  }

  return (
    <SearchWrapper>
      <Input autoFocus="autoFocus" type="text" value={searchText} placeholder='Search' onChange={handleSearch}/>
      <SearchIcon/>
    </SearchWrapper>
  )
}

export default Search