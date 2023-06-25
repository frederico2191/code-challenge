import React, { useState } from 'react'
import { styled } from '../../../../stitches.config'
import { BsSearch } from 'react-icons/bs';
import { useSearchParams } from 'react-router-dom';

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

const Search = ({searched}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchText, setSearchText] = useState('');
  const handleChange = (event) => {
    setSearchText(event.target.value);
  };
  
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // 👇 Get input value
      console.log("PRESSED ENTER", searchText)
      setSearchText('')
    }
  };
  
  let bilo

  
  const handleSearch = (e) => {
    // setSearchParams(e.target.value)
    bilo = e.target.value
    // console.log("billloooo", bilo)
    setSearchText(e.target.value)

  }
  return (
    <SearchWrapper>
      <Input type="search" value={searchText} onKeyDown={handleKeyDown} placeholder='Search' onChange={handleSearch}/>
      {/* <Input type="search" placeholder='Search' value={(e)=>e.target.value} onChange={handleSearch}/> */}
      {/* <Input placeholder='Search' value={searched} onChange={handleSearch}/> */}
      <SearchIcon/>
    </SearchWrapper>
  )
}

export default Search