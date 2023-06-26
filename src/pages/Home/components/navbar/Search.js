import React, { useEffect, useRef, useState } from 'react'
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
  const [cursor, setCursor] = useState(0)

  const ref = useRef(null)

  useEffect(() => {
    const input = ref.current
    const searchParamsLength = searchParams.get("query")?.length
    if (input) {
      input.setSelectionRange(searchParamsLength, searchParamsLength)
      setCursor(searchParamsLength)
    }
}, [ref, cursor, searchParams])

  useEffect(() => {
    setSearchText(searchParams.get("query"))
  },[searchParams])
  
  const handleSearch = _.debounce((event) => {
    searchParams.set("query", event.target.value || '')
    setSearchParams(searchParams)
    setCursor(event.target.value?.length)
  }, 500)

  const resetFocus = (event) => event.target.selectionEnd = cursor

  return (
    <SearchWrapper>
      <Input ref={ref} autoFocus="autoFocus" onFocus={resetFocus} type="text" defaultValue={searchText} placeholder='Search' onChange={handleSearch}/>
      <SearchIcon/>
    </SearchWrapper>
  )
}

export default Search