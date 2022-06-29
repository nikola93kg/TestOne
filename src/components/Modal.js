import React from 'react'
import './Modal.css'

function Modal({ image }) {
    return (
        <div className='modal-img'>
            <img src={image} alt="nesto za dobro" />
        </div>
    )
}

export default Modal