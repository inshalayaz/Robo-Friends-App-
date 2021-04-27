import React from 'react'
import 'tachyons'

function SearchBox({searchField,onSearchChange}) {
    return (
        <div className='pa2' >
            <input type='search' placeholder='Search Robots' className='pa3 ba b--green bg-lightest-blue' onChange={onSearchChange} />
        </div>
    )
}

export default SearchBox
