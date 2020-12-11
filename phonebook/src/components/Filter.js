import React, { useState } from 'react'

const Filter = () => {
    const [ newFilter, setNewFilter ] = useState('')

    const handleNewFilter = (event) => {
        setNewFilter(event.target.value)
    }

    return (
        <form>
            <div>
                find <input value={newFilter} onChange={handleNewFilter} />
            </div>
        </form>
    )
}

export default Filter