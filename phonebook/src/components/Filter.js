import React from 'react'

const Filter = ({ newFilter, handleNewFilter }) =>
    <div>
        find <input value={newFilter} onChange={handleNewFilter} />
    </div>

export default Filter