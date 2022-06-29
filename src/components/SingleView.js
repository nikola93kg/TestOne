import React from 'react'

import './SingleView.css'

function SingleView({ img, fileName, handleClick, select }) {

    return (
        <div className="list-view" onClick={(e) => handleClick(e.target)}>
            <img src={img} alt={fileName} />
            <p className={`${select.selected ? 'active' : ''} `}>{fileName}</p>
        </div>
    )
}

export default SingleView