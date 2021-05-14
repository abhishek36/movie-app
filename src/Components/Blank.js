import React from 'react'

function Blank({search}) {
    return (
        <div className="blank">
            <span>No movie found with search <b><i>{search}</i></b>😢</span>
        </div>
    )
}

export default Blank
