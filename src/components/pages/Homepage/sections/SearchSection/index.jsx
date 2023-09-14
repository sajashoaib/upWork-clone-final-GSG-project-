'use client'
import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
import {
    Searchs,
    StyledInputBases,
  } from "./style";
const SearchSection = () => {
  return (
      <div>
              <Searchs >
                <StyledInputBases
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
                  <SearchIcon sx={{background:'#108a00',padding:'8px 0 8px 10px',borderTopRightRadius: '9px', 
        borderBottomRightRadius: '9px',}} />         
                   </Searchs>
            </div>
  )
}

export default SearchSection
