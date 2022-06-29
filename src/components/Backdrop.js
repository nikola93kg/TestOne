import React from 'react'
import './Backdrop.css'

function Backdrop({ closeModal }) {
    return (
        <div className='backdrop' onClick={closeModal} />
    )
}

export default Backdrop